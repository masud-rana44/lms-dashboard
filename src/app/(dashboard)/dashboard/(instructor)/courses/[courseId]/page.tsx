"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Book,
  Clock,
  Download,
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
import { downloadMaterial } from "@/lib/utils";

export default function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [quizId, setQuizId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    const foundCourse = mockCourses.find((c: Course) => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
      const completedLessons = 3;
      setProgress((completedLessons / foundCourse.lessons.length) * 100);
    }
  }, [courseId]);

  if (!course) return null;

  const quiz = course.lessons.find((lesson) => lesson.id === quizId)
    ?.quizzes[0];

  if (user?.role === "admin" || user?.role === "instructor")
    return (
      <div>
        <p>You don&apos;t have permission to view this page.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/40" />
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
                <span>{course.enrolledStudents} students</span>
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
                {course.lessons.map((lesson, index) => (
                  <Card
                    key={lesson.id}
                    className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setActiveLesson(lesson)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {index < 3 ? (
                            <CheckCircle className="h-5 w-5 text-primary" />
                          ) : (
                            <Play className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{lesson.title}</h3>
                          <p className="text-sm text-gray-500">
                            {lesson.duration} mins
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {lesson.materialUrl && (
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              downloadMaterial(lesson.materialUrl!);
                            }}
                            variant="outline"
                            size="sm"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Materials
                          </Button>
                        )}
                        {lesson.hasQuiz && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setQuizId(lesson.id);
                            }}
                          >
                            <Book className="h-4 w-4 mr-2" />
                            Take Quiz
                          </Button>
                        )}
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="discussions">
                <DiscussionBoard queries={course.queries} />
              </TabsContent>

              <TabsContent value="reviews">
                {/* <ReviewSection courseId={course.id} /> */}
                <p>Review Section</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
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
                    <span className="font-semibold">
                      {course.lessons.length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Duration</span>
                    <span className="font-semibold">
                      {course.lessons.reduce(
                        (acc, lesson) => acc + lesson.duration,
                        0
                      )}{" "}
                      mins
                    </span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  {progress === 0 ? "Start Course" : "Continue Learning"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* {activeLesson && (
        <LessonModal
          lesson={activeLesson}
          onClose={() => setActiveLesson(null)}
        />
      )} */}
      {quizId && quiz && (
        <QuizModal quiz={quiz} onClose={() => setQuizId(null)} />
      )}
    </div>
  );
}
