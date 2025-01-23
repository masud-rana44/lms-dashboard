import { Course, User } from "@/types";

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Advanced Web Development with React",
    description:
      "Dive deep into modern web development with this comprehensive course on React, Next.js, and TypeScript. You'll learn industry-standard practices for building scalable, maintainable applications using the latest features and patterns. Starting with React fundamentals, you'll progress through advanced concepts like custom hooks, context API, and state management solutions. The course covers crucial topics including performance optimization, server-side rendering, API integration, and deployment strategies. You'll gain hands-on experience building real-world applications while learning best practices for code organization, testing, and debugging. Special emphasis is placed on TypeScript integration for type-safe development and Next.js for building production-ready applications. By the end of this course, you'll be equipped with the skills to architect complex web applications, implement advanced design patterns, and follow modern development workflows used by top tech companies.",
    price: 99.99,
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    prerequisites: ["Basic JavaScript knowledge", "HTML & CSS fundamentals"],
    rating: 4.8,
    instructor: {
      id: 2,
      name: "Instructor",
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
          {
            id: "q2",
            question: "What does useState return?",
            options: [
              "Just the current state value",
              "Just the setter function",
              "An array with current state and setter function",
              "A single state object",
            ],
            correctOption: 2,
          },
          {
            id: "q3",
            question: "Which is the correct way to declare a state variable?",
            options: [
              "const count = useState(0)",
              "const {count} = useState(0)",
              "const count = setState(0)",
              "const [count, setCount] = useState(0)",
            ],
            correctOption: 3,
          },
          {
            id: "q4",
            question: "When does React re-render a component?",
            options: [
              "When state or props change",
              "Only when props change",
              "Only when state changes",
              "On every function call",
            ],
            correctOption: 0,
          },
          {
            id: "q5",
            question: "What is the initial state in: useState()?",
            options: ["null", "undefined", "0", "An empty string"],
            correctOption: 1,
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
      "Embark on a comprehensive journey into the world of machine learning with this foundational course. You'll explore the theoretical underpinnings and practical applications of machine learning algorithms using Python. The curriculum covers essential concepts from data preprocessing and feature engineering to model selection and evaluation. Through hands-on projects, you'll implement various algorithms including linear regression, logistic regression, decision trees, and neural networks. Special attention is given to real-world applications, helping you understand how to solve complex problems in areas such as image recognition, natural language processing, and predictive analytics. You'll learn best practices for model optimization, cross-validation, and hyperparameter tuning while gaining practical experience with popular libraries like scikit-learn, TensorFlow, and PyTorch. By course completion, you'll have developed a robust understanding of machine learning principles and the ability to apply them to real-world scenarios.",
    price: 149.99,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
    prerequisites: ["Basic Python knowledge", "Linear algebra fundamentals"],
    rating: 4.7,
    instructor: {
      id: 2,
      name: "Instructor",
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
      "Master the art and science of user interface and user experience design in this comprehensive course. You'll develop a deep understanding of design thinking methodology, user research techniques, and the psychological principles behind effective user interactions. The curriculum covers essential topics including information architecture, wireframing, prototyping, and usability testing. You'll learn to create user-centered designs using industry-standard tools like Figma and Sketch, while exploring advanced concepts such as micro-interactions, accessibility standards, and responsive design principles. Through practical projects, you'll gain experience in conducting user interviews, creating user personas, developing user journey maps, and implementing design systems. Special emphasis is placed on modern design trends, mobile-first approaches, and creating inclusive designs that work for diverse user groups. By the end of this course, you'll have a professional portfolio and the skills to create intuitive, engaging user experiences.",
    price: 79.99,
    imageUrl:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVpfGVufDB8fDB8fHww",
    prerequisites: [
      "Basic design understanding",
      "Familiarity with Figma or Sketch",
    ],
    rating: 4.9,
    instructor: {
      id: 4,
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
      "Become a versatile full-stack developer with this comprehensive course covering both frontend and backend technologies. You'll master the entire web development stack, from creating responsive user interfaces with React to building robust server-side applications with Node.js. The course begins with frontend fundamentals including HTML5, CSS3, and modern JavaScript, then progresses to advanced React concepts including hooks, context, and Redux for state management. On the backend, you'll learn to build scalable APIs with Express.js, implement authentication and authorization, and work with both SQL and NoSQL databases. You'll gain hands-on experience with MongoDB, learn about RESTful architecture, and explore real-time communication with WebSockets. The course also covers essential development topics such as version control with Git, deployment strategies, security best practices, and performance optimization techniques. By the end, you'll be capable of building complete, production-ready web applications from scratch.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 199.99,
    prerequisites: ["Basic programming knowledge"],
    rating: 4.6,
    instructor: {
      id: 2,
      name: "Instructor",
      avatar:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100",
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
      "Immerse yourself in the world of data science with this comprehensive course that bridges theory and practical application. You'll develop a strong foundation in statistical analysis, data visualization, and predictive modeling using Python and its powerful ecosystem of libraries. The curriculum begins with fundamental statistical concepts and probability theory, then progresses to advanced topics in data analysis, including hypothesis testing, regression analysis, and machine learning algorithms. You'll master essential tools like Pandas for data manipulation, Matplotlib and Seaborn for visualization, and scikit-learn for implementing machine learning models. The course emphasizes hands-on learning through real-world datasets, teaching you how to clean and preprocess data, perform exploratory data analysis, and build predictive models. You'll also learn best practices for data storytelling, creating impactful visualizations, and communicating insights to stakeholders. By the end of this course, you'll have the skills to tackle complex data analysis projects and drive data-informed decision making.",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
    prerequisites: ["Basic Python knowledge", "Basic statistics"],
    rating: 4.8,
    instructor: {
      id: 4,
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
      "Transform your mobile development skills with this comprehensive course on React Native. You'll learn to build sophisticated, production-ready mobile applications that run natively on both iOS and Android platforms using a single codebase. The curriculum covers everything from setting up your development environment to deploying apps to the app stores. You'll master fundamental React Native concepts including components, navigation, state management, and styling with flexbox. Advanced topics include integrating native device features, implementing smooth animations, handling offline storage, and optimizing app performance. The course emphasizes practical learning through hands-on projects, teaching you how to create responsive layouts, implement authentication flows, and integrate with backend services. You'll also learn essential mobile development concepts such as push notifications, deep linking, and app store deployment requirements. By the end of this course, you'll be capable of building professional-grade mobile applications that provide native performance and user experience.",
    price: 159.99,
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
    prerequisites: ["JavaScript knowledge", "React basics"],
    rating: 4.7,
    instructor: {
      id: 2,
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
  {
    id: 4,
    name: "Admin User",
    email: "admin2@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 5,
    name: "Instructor",
    email: "instructor2@example.com",
    password: "instructor123",
    role: "instructor",
  },
  {
    id: 6,
    name: "Student",
    email: "student2@example.com",
    password: "student123",
    role: "student",
  },
];

export const leaderboardData = [
  {
    id: 1,
    name: "Liam Smith",
    avatar: "https://avatar.iran.liara.run/public/1.jpg",
    points: 1200,
  },
  {
    id: 2,
    name: "Emma Brown",
    avatar: "https://avatar.iran.liara.run/public/2.jpg",
    points: 1150,
  },
  {
    id: 3,
    name: "Noah Johnson",
    avatar: "https://avatar.iran.liara.run/public/3.jpg",
    points: 1120,
  },
  {
    id: 4,
    name: "Olivia Davis",
    avatar: "https://avatar.iran.liara.run/public/4.jpg",
    points: 1100,
  },
  {
    id: 5,
    name: "Ava Martinez",
    avatar: "https://avatar.iran.liara.run/public/5.jpg",
    points: 1080,
  },
];
