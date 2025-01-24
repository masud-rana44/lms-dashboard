import { enrolledCourses, Stats } from "@/types";
import { StatsCard } from "@/components/stats-card";
import { BookCheck, ChartSpline, Lightbulb, Users } from "lucide-react";
import { EnrolledCourses } from "@/components/dashboard/enrolled-courses";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const studentStatsData: Stats[] = [
  {
    icon: <Lightbulb />,
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    title: "Course Completion Rate",
    value: "72%",
  },
  {
    icon: <ChartSpline />,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
    title: "Learning Progress",
    value: "65.3%",
  },
  {
    icon: <Users />,
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    title: "Enrolled Courses",
    value: 4,
  },
  {
    icon: <BookCheck />,
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    title: "Active Assignments",
    value: "3",
  },
];

export default function StudentDashboardPage() {
  const courses: enrolledCourses[] = [
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
  ];

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentStatsData.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              bgColor={stat.bgColor}
              textColor={stat.textColor}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Enrolled Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <EnrolledCourses courses={courses} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
