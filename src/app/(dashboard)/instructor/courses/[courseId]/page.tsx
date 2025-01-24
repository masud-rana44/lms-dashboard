"use client";

import { Course } from "@/types";
import { notFound, useParams } from "next/navigation";
import { CourseForm } from "@/components/course/course-form";
import coursesApi from "@/services/coursesApi";

export default function EditCourse() {
  const { courseId } = useParams();
  const courses = coursesApi.getAll();

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return notFound();
  }

  const handleSubmit = (data: Course) => {
    const index = courses.findIndex((c) => c.id === courseId);
    if (index !== -1) {
      courses[index] = data;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Course</h1>
      <CourseForm initialData={course} onSubmit={handleSubmit} />
    </div>
  );
}
