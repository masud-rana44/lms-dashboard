import { mockCourses } from "@/lib/mock-data";

const STORAGE_KEY = "courses";

export const initializeCourses = (): void => {
  const storedCourses = localStorage.getItem(STORAGE_KEY);

  if (!storedCourses) {
    // If no data exists, populate with mockCourses
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockCourses));
    console.log("Initialized courses in localStorage.");
  } else {
    console.log("Courses already initialized.");
  }
};
