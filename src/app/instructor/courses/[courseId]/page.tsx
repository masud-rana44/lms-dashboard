"use client";

import { Course } from "@/types";
import { notFound, useParams } from "next/navigation";
import { mockCourses } from "@/lib/mock-data";
import { CourseForm } from "@/components/course/course-form";

export default function EditCourse() {
  const { courseId } = useParams();

  const course = mockCourses.find((c) => c.id === courseId);

  if (!course) {
    return notFound();
  }

  const handleSubmit = (data: Course) => {
    const index = mockCourses.findIndex((c) => c.id === courseId);
    if (index !== -1) {
      mockCourses[index] = data;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Course</h1>
      <CourseForm initialData={course} onSubmit={handleSubmit} />
    </div>
  );
}
