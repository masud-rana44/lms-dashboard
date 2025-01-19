import { CourseCreationForm } from "@/components/course/course-creation-form";

export default async function CreateCoursePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>
      <CourseCreationForm />
    </div>
  );
}
