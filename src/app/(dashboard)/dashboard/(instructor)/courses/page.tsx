"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Star, Clock } from "lucide-react";

export interface Lesson {
  id: string;
  title: string;
  type: "video" | "quiz" | "document";
  content: string;
  duration?: number;
  completed?: boolean;
}

export interface Review {
  id: string;
  userId: string;
  courseId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  price: number;
  prerequisites?: string[];
  lessons: Lesson[];
  enrolledStudents: string[];
  rating: number;
  reviews: Review[];
}

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    instructorId: "2",
    price: 99.99,
    prerequisites: [],
    lessons: [
      {
        id: "l1",
        title: "HTML Basics",
        type: "video",
        content: "Introduction to HTML structure and elements",
        duration: 45,
      },
      {
        id: "l2",
        title: "CSS Fundamentals",
        type: "video",
        content: "Learn about styling and layouts",
        duration: 60,
      },
    ],
    enrolledStudents: ["3"],
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        userId: "3",
        courseId: "1",
        rating: 5,
        comment: "Excellent course for beginners!",
        createdAt: "2024-03-20",
      },
    ],
  },
];

export default function Courses() {
  const router = useRouter();
  const user = {
    id: "2",
    role: "instructor",
  };
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = mockCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Courses</h1>
          <p className="mt-1 text-sm text-gray-500">
            {user?.role === "instructor"
              ? "Manage your courses"
              : "Browse available courses"}
          </p>
        </div>

        {(user?.role === "instructor" || user?.role === "admin") && (
          <Button onClick={() => router.push("/dashboard/courses/create")}>
            <Plus className="h-4 w-4 mr-2" />
            Create Course
          </Button>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => router.push(`/dashboard/courses/${course.id}`)}
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold line-clamp-2">
                {course.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {course.description}
              </p>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>
                    {course.lessons.reduce(
                      (acc, lesson) => acc + (lesson.duration || 0),
                      0
                    )}{" "}
                    mins
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{ width: "60%" }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">60% Complete</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
