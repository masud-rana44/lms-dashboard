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
        videoUrl:
          "https://www.youtube.com/embed/cF2lQ_gZeA8?si=kxsg37PLTR5xDqbn",
        materialUrl:
          "https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf",
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
      {
        id: "l2",
        title: "useState Hook",
        description:
          "Learn how useState hook work in the modern react development.",
        videoUrl:
          "https://www.youtube.com/embed/lAW1Jmmr9hc?si=u449EmJOHvnepXLk",
        materialUrl:
          "https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf",
        duration: 45,
        completions: 200,
        hasQuiz: false,
        quizzes: [],
      },
      {
        id: "l3",
        title: "useState with previous state",
        description:
          "Learn how to use React Hooks to manage state and side effects in functional components.",
        videoUrl:
          "https://www.youtube.com/embed/d0plTCQgsXs?si=_Zww_W1ox96RendH",
        materialUrl:
          "https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf",
        duration: 45,
        completions: 200,
        hasQuiz: true,
        quizzes: [
          {
            id: "q1",
            question: "What is the purpose of useEffect Hook?",
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
    queries: [
      {
        id: "q1",
        studentId: "s1",
        title: "How to install Node.js?",
        description:
          "I am having trouble installing Node.js on my Windows machine. Can someone help me with the steps?",
        status: "open",
        createdAt: new Date().toISOString(),
      },
      {
        id: "q2",
        studentId: "s2",
        title: "How to use React hooks?",
        description:
          "I am new to React and having trouble understanding how to use hooks. Can someone explain it to me?",
        status: "answered",
        createdAt: new Date().toISOString(),
        answers: [
          {
            id: "a1",
            queryId: "q2",
            userId: "inst1",
            content:
              "React hooks let you use state and other React features without writing a class. Start with useState for managing state.",
            createdAt: new Date().toISOString(),
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
        videoUrl: "https://www.youtube.com/embed/abc123",
        materialUrl: "https://example.com/materials/supervised-learning.pdf",
        duration: 50,
        completions: 280,
        hasQuiz: true,
        quizzes: [
          {
            id: "q1",
            question: "What is supervised learning?",
            options: [
              "Learning with labeled data",
              "Learning without labels",
              "Learning by observation",
              "Learning through reinforcement",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l2",
        title: "Data Preprocessing",
        description:
          "Learn essential techniques for preparing your data for machine learning models.",
        videoUrl: "https://www.youtube.com/embed/def456",
        materialUrl: "https://example.com/materials/data-preprocessing.pdf",
        duration: 45,
        completions: 260,
        hasQuiz: true,
        quizzes: [
          {
            id: "q2",
            question: "Why is data preprocessing important?",
            options: [
              "To improve model performance",
              "To make data look better",
              "To reduce storage space",
              "To increase processing time",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l3",
        title: "Model Evaluation",
        description:
          "Master different techniques for evaluating machine learning models.",
        videoUrl: "https://www.youtube.com/embed/ghi789",
        materialUrl: "https://example.com/materials/model-evaluation.pdf",
        duration: 55,
        completions: 240,
        hasQuiz: true,
        quizzes: [
          {
            id: "q3",
            question: "What is cross-validation?",
            options: [
              "A technique to assess model performance",
              "A type of neural network",
              "A data preprocessing step",
              "A deployment strategy",
            ],
            correctOption: 0,
          },
        ],
      },
    ],
    queries: [
      {
        id: "q3",
        studentId: "s3",
        title: "Best practices for feature selection?",
        description:
          "What are the best practices for feature selection in machine learning?",
        status: "open",
        createdAt: new Date().toISOString(),
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
        videoUrl: "https://www.youtube.com/embed/xyz123",
        materialUrl: "https://example.com/materials/design-fundamentals.pdf",
        duration: 40,
        completions: 450,
        hasQuiz: true,
        quizzes: [
          {
            id: "q4",
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
      {
        id: "l2",
        title: "User Research Methods",
        description:
          "Learn effective methods for conducting user research and gathering insights.",
        videoUrl: "https://www.youtube.com/embed/uvw456",
        materialUrl: "https://example.com/materials/user-research.pdf",
        duration: 35,
        completions: 420,
        hasQuiz: true,
        quizzes: [
          {
            id: "q5",
            question: "What is a user persona?",
            options: [
              "A fictional representation of your target user",
              "A real user testing your product",
              "A design pattern",
              "A color scheme",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l3",
        title: "Prototyping and Testing",
        description:
          "Master the art of creating and testing prototypes for better user experience.",
        videoUrl: "https://www.youtube.com/embed/rst789",
        materialUrl: "https://example.com/materials/prototyping.pdf",
        duration: 45,
        completions: 380,
        hasQuiz: true,
        quizzes: [
          {
            id: "q6",
            question: "Why is prototyping important?",
            options: [
              "To test designs before development",
              "To make the final product",
              "To write documentation",
              "To create marketing materials",
            ],
            correctOption: 0,
          },
        ],
      },
    ],
    queries: [
      {
        id: "q4",
        studentId: "s4",
        title: "How to choose a color palette?",
        description:
          "I am unsure how to decide on a color palette for my designs. Any suggestions?",
        status: "answered",
        createdAt: new Date().toISOString(),
        answers: [
          {
            id: "a2",
            queryId: "q4",
            userId: "inst3",
            content:
              "Choose colors that reflect the brand identity and ensure proper contrast for readability.",
            createdAt: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Full-Stack Web Development",
    description:
      "Learn both frontend and backend web development, including popular technologies like React, Node.js, and MongoDB.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 199.99,
    prerequisites: ["Basic programming knowledge"],
    rating: 4.6,
    instructor: {
      id: "inst4",
      name: "James Carter",
    },
    enrolledStudents: 700,
    lessons: [
      {
        id: "l1",
        title: "Frontend Development Basics",
        description:
          "Learn HTML, CSS, and JavaScript fundamentals for frontend development.",
        videoUrl: "https://www.youtube.com/embed/mno123",
        materialUrl: "https://example.com/materials/frontend-basics.pdf",
        duration: 60,
        completions: 650,
        hasQuiz: true,
        quizzes: [
          {
            id: "q7",
            question: "What is the purpose of CSS?",
            options: [
              "To style web pages",
              "To create database queries",
              "To handle server requests",
              "To write business logic",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l2",
        title: "Backend Development with Node.js",
        description:
          "Master server-side programming using Node.js and Express.",
        videoUrl: "https://www.youtube.com/embed/pqr456",
        materialUrl: "https://example.com/materials/nodejs-basics.pdf",
        duration: 55,
        completions: 600,
        hasQuiz: true,
        quizzes: [
          {
            id: "q8",
            question: "What is Node.js?",
            options: [
              "A JavaScript runtime environment",
              "A database system",
              "A frontend framework",
              "A testing tool",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l3",
        title: "Database Design with MongoDB",
        description:
          "Learn how to design and implement MongoDB databases for web applications.",
        videoUrl: "https://www.youtube.com/embed/stu789",
        materialUrl: "https://example.com/materials/mongodb-basics.pdf",
        duration: 50,
        completions: 580,
        hasQuiz: true,
        quizzes: [
          {
            id: "q9",
            question: "What type of database is MongoDB?",
            options: [
              "NoSQL document database",
              "Relational database",
              "Graph database",
              "In-memory database",
            ],
            correctOption: 0,
          },
        ],
      },
    ],
    queries: [],
  },
  {
    id: "5",
    title: "Data Science Fundamentals",
    description:
      "Master the basics of data science including statistics, data analysis, and visualization using Python.",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
    prerequisites: ["Basic Python knowledge", "Basic statistics"],
    rating: 4.8,
    instructor: {
      id: "inst5",
      name: "Rachel Green",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
    enrolledStudents: 450,
    lessons: [
      {
        id: "l1",
        title: "Introduction to Data Science",
        description: "Overview of data science field and essential concepts.",
        videoUrl: "https://www.youtube.com/embed/ds101",
        materialUrl: "https://example.com/materials/intro-ds.pdf",
        duration: 45,
        completions: 400,
        hasQuiz: true,
        quizzes: [
          {
            id: "q1",
            question: "What is data science?",
            options: [
              "A field that uses data to gain insights",
              "A programming language",
              "A database system",
              "A web framework",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l2",
        title: "Statistical Analysis",
        description:
          "Learn fundamental statistical concepts and their applications.",
        videoUrl: "https://www.youtube.com/embed/ds102",
        materialUrl: "https://example.com/materials/statistics.pdf",
        duration: 50,
        completions: 380,
        hasQuiz: true,
        quizzes: [
          {
            id: "q2",
            question: "What is a p-value?",
            options: [
              "A measure of statistical significance",
              "A type of graph",
              "A programming concept",
              "A database query",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l3",
        title: "Data Visualization",
        description:
          "Master creating effective visualizations using Python libraries.",
        videoUrl: "https://www.youtube.com/embed/ds103",
        materialUrl: "https://example.com/materials/visualization.pdf",
        duration: 55,
        completions: 360,
        hasQuiz: true,
        quizzes: [
          {
            id: "q3",
            question:
              "Which library is commonly used for data visualization in Python?",
            options: ["Matplotlib", "React", "Express", "MongoDB"],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l4",
        title: "Exploratory Data Analysis",
        description:
          "Learn techniques for exploring and understanding datasets.",
        videoUrl: "https://www.youtube.com/embed/ds104",
        materialUrl: "https://example.com/materials/eda.pdf",
        duration: 60,
        completions: 340,
        hasQuiz: true,
        quizzes: [
          {
            id: "q4",
            question: "What is the purpose of EDA?",
            options: [
              "To understand data patterns and relationships",
              "To create websites",
              "To write server code",
              "To design databases",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l5",
        title: "Data Cleaning and Preprocessing",
        description: "Master techniques for preparing data for analysis.",
        videoUrl: "https://www.youtube.com/embed/ds105",
        materialUrl: "https://example.com/materials/data-cleaning.pdf",
        duration: 45,
        completions: 320,
        hasQuiz: true,
        quizzes: [
          {
            id: "q5",
            question: "Why is data cleaning important?",
            options: [
              "To ensure accurate analysis results",
              "To make websites faster",
              "To improve server performance",
              "To create better designs",
            ],
            correctOption: 0,
          },
        ],
      },
    ],
    queries: [],
  },
  {
    id: "6",
    title: "Mobile App Development with React Native",
    description:
      "Learn to build cross-platform mobile applications using React Native framework.",
    price: 159.99,
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
    prerequisites: ["JavaScript knowledge", "React basics"],
    rating: 4.7,
    instructor: {
      id: "inst6",
      name: "Mike Ross",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    },
    enrolledStudents: 380,
    lessons: [
      {
        id: "l1",
        title: "React Native Basics",
        description: "Introduction to React Native and its core concepts.",
        videoUrl: "https://www.youtube.com/embed/rn101",
        materialUrl: "https://example.com/materials/react-native-basics.pdf",
        duration: 50,
        completions: 350,
        hasQuiz: true,
        quizzes: [
          {
            id: "q1",
            question: "What is React Native?",
            options: [
              "A framework for building mobile apps",
              "A database system",
              "A web browser",
              "An operating system",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l2",
        title: "Navigation in React Native",
        description: "Learn to implement navigation in mobile applications.",
        videoUrl: "https://www.youtube.com/embed/rn102",
        materialUrl: "https://example.com/materials/navigation.pdf",
        duration: 45,
        completions: 330,
        hasQuiz: true,
        quizzes: [
          {
            id: "q2",
            question: "What is React Navigation?",
            options: [
              "A library for handling navigation",
              "A styling framework",
              "A testing tool",
              "A deployment platform",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l3",
        title: "Styling in React Native",
        description: "Master styling techniques for React Native applications.",
        videoUrl: "https://www.youtube.com/embed/rn103",
        materialUrl: "https://example.com/materials/styling.pdf",
        duration: 40,
        completions: 310,
        hasQuiz: true,
        quizzes: [
          {
            id: "q3",
            question:
              "How is styling different in React Native compared to web?",
            options: [
              "It uses a subset of CSS with flexbox",
              "It uses exactly the same CSS",
              "It doesn't support styling",
              "It only uses inline styles",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l4",
        title: "Working with Native APIs",
        description: "Learn to interact with device features and APIs.",
        videoUrl: "https://www.youtube.com/embed/rn104",
        materialUrl: "https://example.com/materials/native-apis.pdf",
        duration: 55,
        completions: 290,
        hasQuiz: true,
        quizzes: [
          {
            id: "q4",
            question: "What is a native module?",
            options: [
              "A bridge between JavaScript and native platform code",
              "A type of database",
              "A styling component",
              "A testing framework",
            ],
            correctOption: 0,
          },
        ],
      },
      {
        id: "l5",
        title: "App Deployment",
        description: "Learn how to deploy React Native apps to app stores.",
        videoUrl: "https://www.youtube.com/embed/rn105",
        materialUrl: "https://example.com/materials/deployment.pdf",
        duration: 60,
        completions: 270,
        hasQuiz: true,
        quizzes: [
          {
            id: "q5",
            question: "What is needed to deploy to the App Store?",
            options: [
              "An Apple Developer account",
              "A web server",
              "A database",
              "A domain name",
            ],
            correctOption: 0,
          },
        ],
      },
    ],
    queries: [],
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
