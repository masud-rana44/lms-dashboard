import { useRouter } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Star,
  BookOpen,
  Clock,
  Users,
  MessageSquare,
  Edit,
} from "lucide-react";
import { Course, User } from "@/types";
import Link from "next/link";

export function CourseCard({ course, user }: { course: Course; user: User }) {
  const router = useRouter();

  const getCompletionRate = (course: Course) => {
    const totalCompletions = course.lessons.reduce(
      (acc, lesson) => acc + lesson.completions,
      0
    );
    const totalPossibleCompletions =
      course.enrolledStudents.length * course.lessons.length;
    return Math.round((totalCompletions / totalPossibleCompletions) * 100);
  };

  return (
    <Card
      key={course.id}
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={course.imageUrl || "/placeholder-course.jpg"}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="mb-2 bg-primary/80 hover:bg-primary">
            ${course.price}
          </Badge>
          <h3 className="text-xl font-semibold text-white line-clamp-2">
            {course.title}
          </h3>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-gray-600 line-clamp-2">{course.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{course.lessons.length} Lessons</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>
              {course.lessons.reduce((acc, lesson) => acc + lesson.duration, 0)}{" "}
              mins
            </span>
          </div>
        </div>

        {user?.role === "instructor" && (
          <div className="space-y-4 pt-4 border-t">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center text-gray-600">
                <Users className="h-4 w-4 mr-1" />
                <span>{course.enrolledStudents.length} Students</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{course.queries?.length || 0} Discussions</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Completion Rate</span>
                <span>{getCompletionRate(course)}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${getCompletionRate(course)}%` }}
                />
              </div>
            </div>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() =>
                  router.push(`/instructor/courses/${course.id}/queries`)
                }
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Discussions
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => router.push(`/instructor/courses/${course.id}`)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>
        )}

        {user?.role === "student" && (
          <Button asChild className="w-full" size="lg">
            <Link href={`/student/courses/${course.id}`}>
              Continue Learning
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
}
