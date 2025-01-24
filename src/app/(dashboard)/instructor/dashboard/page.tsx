"use client";

import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";
import { useUser } from "@/hooks/use-user";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/stats-card";
import { leaderboardData, mockCourses } from "@/lib/mock-data";
import { ChartSpline, Lightbulb, UserCheck, Users } from "lucide-react";
import CourseProgressChart from "@/components/course/course-progress-chart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

ChartJS.register(
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend
);

export default function InstructorDashboardPage() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex mt-32 justify-center h-screen">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full border-t-accent animate-spin" />
      </div>
    );
  }

  const totalStudents = mockCourses.reduce(
    (acc, course) => acc + course.enrolledStudents.length,
    0
  );

  return (
    <div className="space-y-8  min-h-screen">
      {/* Header */}
      <header className="bg-gray-50 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left max-w-lg">
          <h1 className="text-2xl font-bold text-gray-800">
            Hi, {user.name} 👋
          </h1>
          <p className="text-gray-600">
            Explore courses, guide students, and empower their learning journeys
            effortlessly.
          </p>
        </div>
        <Button className="mt-4 sm:mt-0">
          <Link href="/instructor/courses">Explore Courses</Link>
        </Button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          icon={<Lightbulb />}
          bgColor="bg-green-100"
          textColor="text-green-600"
          title="Student Overall Success Rate"
          value="88%"
        />
        <StatsCard
          icon={<ChartSpline />}
          bgColor="bg-yellow-100"
          textColor="text-yellow-600"
          title="Progress Statistics"
          value="70.5%"
        />
        <StatsCard
          icon={<Users />}
          bgColor="bg-purple-100"
          textColor="text-purple-600"
          title="Total Students"
          value={totalStudents}
        />
        <StatsCard
          icon={<UserCheck />}
          bgColor="bg-red-100"
          textColor="text-red-600"
          title="Active Students"
          value="20"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Section: Chart */}
        <CourseProgressChart user={user} />

        {/* Right Section: Table */}
        <div className="lg:col-span-4">
          <div className="p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Leaderboard
            </h3>

            <div>
              {leaderboardData.map((user, index) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-bold">{index + 1}.</span>
                    <Avatar>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>
                        <span>{user.name[0]}</span>
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <Badge variant="secondary">{user.points} pts</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
