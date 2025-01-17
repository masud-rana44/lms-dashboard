"use client";

import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Course {
  id: string;
  title: string;
  progress: number;
  status: "not-started" | "in-progress" | "completed";
  lastAccessed: string;
}

interface EnrolledCoursesProps {
  courses?: Course[];
}

export function EnrolledCourses({ courses = [] }: EnrolledCoursesProps) {
  const getStatusColor = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return "text-green-500";
      case "in-progress":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusText = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      default:
        return "Not Started";
    }
  };

  if (courses.length === 0) {
    return (
      <div className="flex h-[200px] items-center justify-center text-muted-foreground">
        No courses enrolled yet.
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Course Name</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Accessed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell className="font-medium">{course.title}</TableCell>
            <TableCell>
              <div className="w-[150px] space-y-2">
                <Progress value={course.progress} />
                <p className="text-xs text-muted-foreground">
                  {course.progress}% completed
                </p>
              </div>
            </TableCell>
            <TableCell>
              <span className={getStatusColor(course.status)}>
                {getStatusText(course.status)}
              </span>
            </TableCell>
            <TableCell>{course.lastAccessed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
