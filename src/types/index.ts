export interface DashboardStats {
  enrolledCount: number;
  inProgressCount: number;
  overallProgress: number;
  completedCount: number;
  completedThisMonth: number;
  certificatesCount: number;
  latestCertificate: string;
  courses: {
    id: string;
    title: string;
    progress: number;
    status: "not-started" | "in-progress" | "completed";
    lastAccessed: string;
  }[];
}

export interface Course {
  id: string;
  title: string;
  studentsCount: number;
  status: "published" | "draft" | "archived";
  lastUpdated: string;
}

export interface CourseDetails {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  category: "development" | "design";
  level: "beginner" | "intermediate" | "expert";
  instructor: {
    id: string;
    name: string;
    email: string;
  };
  lessons: {
    id: string;
    title: string;
    order: number;
    videoUrl: string;
  }[];
}

export interface Sale {
  id: string;
  studentName: string;
  email: string;
  courseName: string;
  amount: number;
  date: string;
}
