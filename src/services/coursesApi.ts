import { Course } from "@/types";

const STORAGE_KEY = "courses";

const getCourses = (): Course[] => {
  const storedCourses = localStorage.getItem(STORAGE_KEY);
  return storedCourses ? JSON.parse(storedCourses) : [];
};

const saveCourses = (courses: Course[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
};

const coursesApi = {
  getAll: (): Course[] => {
    return getCourses();
  },

  getCourseById: (courseId: string): Course | undefined => {
    return getCourses().find((course) => course.id === courseId);
  },

  add: (newCourse: Course): void => {
    const courses = getCourses();
    saveCourses([...courses, newCourse]);
  },

  update: (updatedCourse: Course): void => {
    const courses = getCourses();
    const updatedCourses = courses.map((course) =>
      course.id === updatedCourse.id ? updatedCourse : course
    );
    saveCourses(updatedCourses);
  },

  delete: (courseId: string): void => {
    const courses = getCourses();
    const filteredCourses = courses.filter((course) => course.id !== courseId);
    saveCourses(filteredCourses);
  },
};

export default coursesApi;
