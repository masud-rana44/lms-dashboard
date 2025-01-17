import { StudentDashboard } from "@/components/dashboard/student-dashboard";
import { DashboardStats } from "@/types";
import React from "react";

const stats: DashboardStats = {
  enrolledCount: 4,
  inProgressCount: 2,
  overallProgress: 65,
  completedCount: 2,
  completedThisMonth: 1,
  certificatesCount: 2,
  latestCertificate: "Web Development",
  courses: [
    {
      id: "1",
      title: "Web Development Fundamentals",
      progress: 100,
      status: "completed",
      lastAccessed: "2024-03-15",
    },
    {
      id: "2",
      title: "React Advanced Concepts",
      progress: 45,
      status: "in-progress",
      lastAccessed: "2024-03-20",
    },
    {
      id: "3",
      title: "TypeScript Masterclass",
      progress: 0,
      status: "not-started",
      lastAccessed: "N/A",
    },
  ],
};

export default function DashboardPage() {
  return (
    <div>
      <StudentDashboard stats={stats} />
    </div>
  );
}
