"use client";

import { useState } from "react";
import { mockCourses } from "@/lib/mock-data";
import { useUser } from "@/hooks/use-user";
import { CourseCard } from "@/components/course/course-card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function StudentCourses() {
  const { user, isLoading } = useUser();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = mockCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log({ user, isLoading });

  if (isLoading) {
    return (
      <div className="flex mt-32 justify-center h-screen">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full border-t-accent animate-spin" />
      </div>
    );
  }

  if (!user)
    return (
      <div className="text-center mt-10 text-gray-600">
        <p>You don&apos;t have permission to view this page.</p>
      </div>
    );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Available Courses
          </h1>
          <p className="mt-2 text-gray-500">Browse and continue learning</p>
        </div>
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

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} user={user} />
        ))}
      </div>
    </div>
  );
}
