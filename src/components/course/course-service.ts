import { toast } from "@/hooks/use-toast";

// Types
export interface Quiz {
  question: string;
  options: string[];
  correctOption: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  hasQuiz: boolean;
  quiz?: Quiz;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  price: string;
  prerequisites: string;
  lessons: Lesson[];
  createdAt: string;
  updatedAt: string;
}

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class CourseService {
  private storageKey = "courses";

  // Get all courses
  async getCourses(): Promise<Course[]> {
    await delay(800); // Simulate network delay
    const courses = localStorage.getItem(this.storageKey);
    return courses ? JSON.parse(courses) : [];
  }

  // Create a new course
  async createCourse(courseData: Partial<Course>): Promise<Course> {
    await delay(1000); // Simulate network delay

    // Simulate validation
    if (!courseData.title || !courseData.description) {
      throw new Error("Title and description are required");
    }

    const courses = await this.getCourses();

    const newCourse: Course = {
      id: Math.random().toString(36).substr(2, 9),
      ...courseData,
      lessons: courseData.lessons || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as Course;

    courses.push(newCourse);
    localStorage.setItem(this.storageKey, JSON.stringify(courses));

    return newCourse;
  }

  // Get a course by ID
  async getCourse(id: string): Promise<Course | null> {
    await delay(500);
    const courses = await this.getCourses();
    return courses.find((course) => course.id === id) || null;
  }

  // Update a course
  async updateCourse(id: string, courseData: Partial<Course>): Promise<Course> {
    await delay(1000);
    const courses = await this.getCourses();
    const index = courses.findIndex((course) => course.id === id);

    if (index === -1) {
      throw new Error("Course not found");
    }

    const updatedCourse = {
      ...courses[index],
      ...courseData,
      updatedAt: new Date().toISOString(),
    };

    courses[index] = updatedCourse;
    localStorage.setItem(this.storageKey, JSON.stringify(courses));

    return updatedCourse;
  }

  // Delete a course
  async deleteCourse(id: string): Promise<void> {
    await delay(800);
    const courses = await this.getCourses();
    const filteredCourses = courses.filter((course) => course.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(filteredCourses));
  }
}

export const courseService = new CourseService();
