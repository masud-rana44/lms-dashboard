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

export interface User {
  id: number;
  name: string;
  email: string;
  role: "student" | "instructor" | "admin";
  password?: string;
  avatar?: string;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
}

export interface Answer {
  id: string;
  queryId: string;
  userId: string;
  content: string;
  createdAt: string;
}

export interface Query {
  id: string;
  studentId: string;
  title: string;
  description: string;
  status: "open" | "answered";
  createdAt: string;
  answers?: Answer[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  materialUrl?: string;
  duration: number;
  completions: number;
  hasQuiz: boolean;
  quizzes: Quiz[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  prerequisites: string[];
  rating: number;
  instructor: {
    id: number;
    name: string;
    avatar?: string;
  };
  enrolledStudents: number;
  lessons: Lesson[];
  queries?: Query[];
}
