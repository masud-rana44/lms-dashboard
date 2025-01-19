import { Course, User } from "@/types";

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Advanced Web Development with React",
    description:
      "Master modern web development using React, Next.js, and TypeScript. Learn best practices, state management, and advanced patterns.",
    price: 99.99,
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    prerequisites: ["Basic JavaScript knowledge", "HTML & CSS fundamentals"],
    rating: 4.8,
    instructor: {
      id: "inst1",
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
    },
    enrolledStudents: 256,
    lessons: [
      {
        id: "l1",
        title: "Introduction to React Hooks",
        description:
          "Learn how to use React Hooks to manage state and side effects in functional components.",
        videoUrl: "https://example.com/videos/react-hooks",
        materialUrl: "https://example.com/materials/react-hooks.pdf",
        duration: 45,
        completions: 200,
        hasQuiz: true,
        quizzes: [
          {
            id: "q1",
            question: "What is the purpose of useState Hook?",
            options: [
              "To manage component state",
              "To handle side effects",
              "To create refs",
              "To optimize performance",
            ],
            correctOption: 0,
          },
        ],
      },
    ],
    discussions: [
      {
        id: "d1",
        studentName: "John Doe",
        question: "How can I optimize React state management?",
        timestamp: "2025-01-10T10:00:00Z",
        replies: [
          {
            id: "r1",
            instructorName: "Sarah Johnson",
            response:
              "Consider using React context or libraries like Redux for better scalability.",
            timestamp: "2025-01-10T10:15:00Z",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Introduction to Machine Learning",
    description:
      "Get started with machine learning concepts, algorithms, and real-world applications using Python.",
    price: 149.99,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
    prerequisites: ["Basic Python knowledge", "Linear algebra fundamentals"],
    rating: 4.7,
    instructor: {
      id: "inst2",
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&auto=format&fit=crop",
    },
    enrolledStudents: 320,
    lessons: [
      {
        id: "l1",
        title: "Understanding Supervised Learning",
        description:
          "Explore the fundamentals of supervised learning and key algorithms like regression and classification.",
        videoUrl: "https://example.com/videos/supervised-learning",
        duration: 50,
        completions: 280,
        hasQuiz: false,
        quizzes: [],
      },
    ],
    discussions: [
      {
        id: "d1",
        studentName: "Emily Brown",
        question: "What are the best practices for feature selection?",
        timestamp: "2025-01-09T15:00:00Z",
        replies: [
          {
            id: "r1",
            instructorName: "John Doe",
            response:
              "Use techniques like mutual information and Lasso regression for feature selection.",
            timestamp: "2025-01-09T15:30:00Z",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "UI/UX Design Essentials",
    description:
      "Learn the principles of user interface and user experience design to create beautiful and functional designs.",
    price: 79.99,
    imageUrl:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVpfGVufDB8fDB8fHww",
    prerequisites: [
      "Basic design understanding",
      "Familiarity with Figma or Sketch",
    ],
    rating: 4.9,
    instructor: {
      id: "inst3",
      name: "Emily Davis",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop",
    },
    enrolledStudents: 500,
    lessons: [
      {
        id: "l1",
        title: "Design Fundamentals",
        description:
          "Understand the core principles of design, including typography, color theory, and layout.",
        videoUrl: "https://example.com/videos/design-fundamentals",
        duration: 40,
        completions: 450,
        hasQuiz: true,
        quizzes: [
          {
            id: "q1",
            question: "What is the purpose of contrast in design?",
            options: [
              "To create visual interest and focus",
              "To increase page load speed",
              "To align elements consistently",
              "To add more colors",
            ],
            correctOption: 0,
          },
        ],
      },
    ],
    discussions: [
      {
        id: "d1",
        studentName: "Michael Lee",
        question: "How do I decide the color palette for my designs?",
        timestamp: "2025-01-08T09:00:00Z",
        replies: [
          {
            id: "r1",
            instructorName: "Emily Davis",
            response:
              "Choose colors based on the brand identity and ensure proper contrast for readability.",
            timestamp: "2025-01-08T09:20:00Z",
          },
        ],
      },
    ],
  },
];

export const mockUsers: User[] = [
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
