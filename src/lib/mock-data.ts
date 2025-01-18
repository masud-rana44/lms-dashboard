import { DashboardStats, Sale, Course, CourseDetails } from "@/types";

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

export const sampleCourses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    studentsCount: 156,
    status: "published",
    lastUpdated: "2024-03-20",
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    studentsCount: 89,
    status: "published",
    lastUpdated: "2024-03-18",
  },
  {
    id: "3",
    title: "TypeScript for Beginners",
    studentsCount: 0,
    status: "draft",
    lastUpdated: "2024-03-15",
  },
  {
    id: "4",
    title: "CSS Masterclass",
    studentsCount: 234,
    status: "archived",
    lastUpdated: "2024-02-28",
  },
];

export const stats: DashboardStats = {
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

export const mockCourses: CourseDetails[] = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development",
    imageUrl: "/course-1.jpg",
    price: 49.99,
    category: "development",
    level: "beginner",
    instructor: {
      id: "i1",
      name: "John Doe",
      email: "john@example.com",
    },
    lessons: [
      {
        id: "l1",
        title: "HTML Basics",
        order: 1,
        videoUrl: "https://example.com/videos/html-basics",
      },
      {
        id: "l2",
        title: "CSS Fundamentals",
        order: 2,
        videoUrl: "https://example.com/videos/css-fundamentals",
      },
      {
        id: "l3",
        title: "JavaScript Intro",
        order: 3,
        videoUrl: "https://example.com/videos/javascript-intro",
      },
    ],
  },
  {
    id: "2",
    title: "React Masterclass",
    description: "Advanced React concepts and patterns",
    imageUrl: "/course-2.jpg",
    price: 79.99,
    category: "development",
    level: "intermediate",
    instructor: {
      id: "i2",
      name: "Sarah Wilson",
      email: "sarah@example.com",
    },
    lessons: [
      {
        id: "l4",
        title: "React Hooks",
        order: 1,
        videoUrl: "https://example.com/videos/react-hooks",
      },
      {
        id: "l5",
        title: "State Management",
        order: 2,
        videoUrl: "https://example.com/videos/state-management",
      },
      {
        id: "l6",
        title: "Performance Optimization",
        order: 3,
        videoUrl: "https://example.com/videos/performance-optimization",
      },
    ],
  },
];

export const mockUsers = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    name: "Instructor",
    email: "instructor@example.com",
    password: "instructor123",
    role: "instructor",
  },
  {
    id: 3,
    name: "Student",
    email: "student@example.com",
    password: "student123",
    role: "student",
  },
];
