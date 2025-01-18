"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/types";

interface CoursesListProps {
  courses?: Course[];
}

export function CoursesList({ courses = [] }: CoursesListProps) {
  const getStatusBadgeColor = (status: Course["status"]) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
    }
  };

  if (courses.length === 0) {
    return (
      <div className="flex h-[200px] items-center justify-center text-muted-foreground">
        No courses created yet.
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Course Name</TableHead>
          <TableHead>Students</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell className="font-medium">{course.title}</TableCell>
            <TableCell>{course.studentsCount}</TableCell>
            <TableCell>
              <Badge className={getStatusBadgeColor(course.status)}>
                {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell className="text-muted-foreground">
              {course.lastUpdated}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
