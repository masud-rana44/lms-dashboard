"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Plus,
  Star,
  Clock,
  Users,
  MessageSquare,
  Edit,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { mockCourses } from "@/lib/mock-data";
import { Course, User } from "@/types";
import { useUser } from "@/hooks/use-user";
import Link from "next/link";

export default function Courses() {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = mockCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex mt-32 justify-center h-screen">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full border-t-accent animate-spin" />
      </div>
    );
  }

  if (!user || user.role === "admin")
    return (
      <div className="text-center mt-10 text-gray-600">
        <p>You don&apos;t have permission to view this page.</p>
      </div>
    );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="mt-2 text-gray-500">
            {user?.role === "instructor"
              ? "Manage your courses and track student engagement"
              : "Browse available courses"}
          </p>
        </div>

        {user?.role === "instructor" && (
          <Button
            size="lg"
            onClick={() => router.push("/dashboard/courses/create")}
          >
            <Plus className="h-5 w-5 mr-2" />
            Create Course
          </Button>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>
      </div>

      {filteredCourses.length === 0 && (
        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
          <p className="text-gray-500">
            No courses found. Try changing the search query.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} user={user} />
        ))}
      </div>
    </div>
  );
}

export function CourseCard({ course, user }: { course: Course; user: User }) {
  const router = useRouter();

  const getCompletionRate = (course: Course) => {
    const totalCompletions = course.lessons.reduce(
      (acc, lesson) => acc + lesson.completions,
      0
    );
    const totalPossibleCompletions =
      course.enrolledStudents * course.lessons.length;
    return Math.round((totalCompletions / totalPossibleCompletions) * 100);
  };

  return (
    <Card
      key={course.id}
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-48 w-full">
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
                <span>{course.enrolledStudents} Students</span>
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
                  router.push(`/dashboard/courses/${course.id}/discussions`)
                }
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Discussions
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() =>
                  router.push(`/dashboard/courses/${course.id}/edit`)
                }
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>
        )}

        {user?.role === "student" && (
          <Button asChild className="w-full" size="lg">
            <Link href={`/dashboard/courses/${course.id}`}>
              Continue Learning
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
}
