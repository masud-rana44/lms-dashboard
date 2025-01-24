"use client";

import {
  BookIcon,
  DollarSignIcon,
  GraduationCap,
  UserIcon,
} from "lucide-react";
import { StatsCard } from "@/components/stats-card";
import { mockUsers } from "@/lib/mock-data";
import { Overview } from "@/components/dashboard/overview";
import { RecentSales, Sale } from "@/components/dashboard/recent-sales";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stats } from "@/types";
import coursesApi from "@/services/coursesApi";

const sampleSales: Sale[] = [
  {
    id: "1",
    studentName: "John Doe",
    email: "john.doe@example.com",
    courseName: "Web Development Fundamentals",
    amount: 49.99,
    date: "2024-03-20",
  },
  {
    id: "2",
    studentName: "Sarah Wilson",
    email: "sarah.w@example.com",
    courseName: "React Advanced Concepts",
    amount: 79.99,
    date: "2024-03-19",
  },
  {
    id: "3",
    studentName: "Michael Brown",
    email: "m.brown@example.com",
    courseName: "TypeScript Masterclass",
    amount: 59.99,
    date: "2024-03-19",
  },
  {
    id: "4",
    studentName: "Emma Davis",
    email: "emma.d@example.com",
    courseName: "UI/UX Design Principles",
    amount: 89.99,
    date: "2024-03-18",
  },
  {
    id: "5",
    studentName: "James Smith",
    email: "james.s@example.com",
    courseName: "Python for Beginners",
    amount: 39.99,
    date: "2024-03-18",
  },
];

const totalUsers = mockUsers.length;
const totalCourses = coursesApi.getAll().length;

const statsData: Stats[] = [
  {
    icon: <UserIcon />,
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    title: "Total Users",
    value: totalUsers,
  },
  {
    icon: <BookIcon />,
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
    title: "Total Courses",
    value: totalCourses,
  },
  {
    icon: <GraduationCap />,
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    title: "Active Students",
    value: "5",
  },
  {
    icon: <DollarSignIcon />,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
    title: "Revenue",
    value: "$5,231.89",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Dashboard Content */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Overview Section */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>

        {/* Recent Sales Section */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentSales sales={sampleSales} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
