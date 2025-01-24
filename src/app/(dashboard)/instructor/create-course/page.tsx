"use client";

import { Course } from "@/types";
import coursesApi from "@/services/coursesApi";
import { CourseForm } from "@/components/course/course-form";

export default function CreateCoursePage() {
  const handleSubmit = (data: Course) => {
    coursesApi.add(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Create New Course</h1>
      <CourseForm onSubmit={handleSubmit} />
    </div>
  );
}
