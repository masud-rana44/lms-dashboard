import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/components/dashboard/overview";
import { RecentSales, Sale } from "@/components/dashboard/recent-sales";

export const sampleSales: Sale[] = [
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

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">873</div>
            <p className="text-xs text-muted-foreground">
              +18.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +15.3% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            {" "}
            <Overview />{" "}
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            {" "}
            <RecentSales sales={sampleSales} />{" "}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
