"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Clock,
  Play,
  Star,
  Users,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import type { Course, Lesson } from "@/types";
import { DiscussionBoard } from "@/components/course/discussion-board";
import { LessonModal } from "@/components/course/lession-modal";
import { mockCourses } from "@/lib/mock-data";
import { useUser } from "@/hooks/use-user";
import { QuizModal } from "@/components/course/quiz-modal";
import { ReviewSection } from "@/components/course/review-section";
import { cn } from "@/lib/utils";

export default function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [quizId, setQuizId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const { user } = useUser();
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  useEffect(() => {
    const foundCourse = mockCourses.find((c: Course) => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
      setProgress((completedLessons.length / foundCourse.lessons.length) * 100);
    }
  }, [courseId, completedLessons]);

  if (!course) return null;

  const quiz = course.lessons.find((lesson) => lesson.id === quizId)?.quizzes;

  if (user?.role === "admin" || user?.role === "instructor")
    return (
      <div>
        <p>You don&apos;t have permission to view this page.</p>
      </div>
    );

  const handleLessonComplete = (lessonId: string) => {
    if (!course) return;

    setCompletedLessons((prev) => [...prev, lessonId]);

    const currentIndex = course.lessons.findIndex((l) => l.id === lessonId);
    const nextIndex = currentIndex + 1;

    if (nextIndex < course.lessons.length) {
      setCurrentLessonIndex(nextIndex);
      setActiveLesson(course.lessons[nextIndex]);
    } else {
      setActiveLesson(null);
    }
  };

  const handleStartLesson = (lessonId: string) => {
    if (!course) return;
    const lesson = course.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      setActiveLesson(lesson);
      setCurrentLessonIndex(course.lessons.indexOf(lesson));
    }
  };

  const handleContinueLearning = () => {
    if (!course) return;

    // Reset all state when starting again
    setCompletedLessons([]);
    setProgress(0);
    setCurrentLessonIndex(0);
    setActiveLesson(course.lessons[0]);
    setQuizId(null);
  };

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  const renderLessons = () => (
    <div className="space-y-4">
      {course?.lessons.map((lesson, index) => (
        <Card
          key={lesson.id}
          className={cn(
            "p-4 hover:shadow-md transition-shadow cursor-pointer",
            currentLessonIndex === index && "border-primary"
          )}
          onClick={() => setActiveLesson(lesson)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                {completedLessons.includes(lesson.id) ? (
                  <CheckCircle className="h-5 w-5 text-primary" />
                ) : (
                  <Play className="h-5 w-5 text-primary" />
                )}
              </div>
              <div>
                <h3 className="font-semibold">{lesson.title}</h3>
                <p className="text-sm text-gray-500">{lesson.duration} mins</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </Card>
      ))}
    </div>
  );

  const renderSidebar = () => (
    <Card className="p-6 sticky top-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-gray-500 mt-2">
            {Math.round(progress)}% Complete
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Price</span>
            <span className="font-semibold">${course.price}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Lessons</span>
            <span className="font-semibold">{course.lessons.length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Total Duration</span>
            <span className="font-semibold">
              {course.lessons.reduce((acc, lesson) => acc + lesson.duration, 0)}{" "}
              mins
            </span>
          </div>
        </div>

        {progress === 100 ? (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-center">
              <p className="font-medium text-green-800">🎉 Course Completed!</p>
              <p className="text-sm text-green-600">
                Congratulations on finishing the course!
              </p>
            </div>
            <Button
              className="w-full"
              size="lg"
              onClick={handleContinueLearning}
            >
              Start Again
            </Button>
          </div>
        ) : (
          <Button
            className="w-full"
            size="lg"
            onClick={() => {
              if (progress === 0 && course.lessons.length > 0) {
                handleStartLesson(course.lessons[0].id);
              } else {
                handleContinueLearning();
              }
            }}
          >
            {progress === 0 ? "Start Course" : "Continue Learning"}
          </Button>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${course.imageUrl})`,
        }}
        className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 bg-cover bg-no-repeat bg-center"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              {course.title}
            </h1>
            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-1" />
                <span>{course.enrolledStudents.length} students</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1" />
                <span>
                  {course.lessons.reduce(
                    (acc, lesson) => acc + lesson.duration,
                    0
                  )}{" "}
                  mins
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    About This Course
                  </h2>
                  <p className="text-gray-600">{course.description}</p>

                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Prerequisites</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {course.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
                  <div className="flex items-center space-x-4">
                    <div className="relative aspect-square">
                      <Image
                        src={
                          course.instructor.avatar ||
                          "/assets/placeholder-avatar.jpg"
                        }
                        fill
                        alt={course.instructor.name}
                        className="rounded-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        {course.instructor.name}
                      </h3>
                      <p className="text-gray-600">Course Instructor</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="lessons" className="space-y-4">
                {renderLessons()}
              </TabsContent>

              <TabsContent value="discussions">
                <DiscussionBoard queries={course.queries} />
              </TabsContent>

              <TabsContent value="reviews">
                <ReviewSection courseId={course.id} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">{renderSidebar()}</div>
        </div>
      </div>

      {/* Modals */}
      {activeLesson && (
        <LessonModal
          lesson={activeLesson}
          onClose={() => setActiveLesson(null)}
          onComplete={handleLessonComplete}
          isCompleted={isLessonCompleted(activeLesson.id)}
          onTakeQuiz={(lessonId) => setQuizId(lessonId)}
        />
      )}
      {quizId && quiz && (
        <QuizModal quiz={quiz} onClose={() => setQuizId(null)} />
      )}
    </div>
  );
}
