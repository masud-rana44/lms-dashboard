/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus, Trash2, GripVertical } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { z } from "zod";
import { forwardRef, useImperativeHandle } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Lesson, Quiz } from "@/types";

interface LessonsFormProps {
  lessons: Lesson[];
  setLessons: (lessons: Lesson[]) => void;
}

// Add these schemas at the top after imports
const quizSchema = z.object({
  id: z.string(),
  question: z.string().min(1, "Question is required"),
  options: z
    .array(z.string().min(1, "Option is required"))
    .length(4, "Must have exactly 4 options"),
  correctOption: z.number().min(0).max(3),
});

const lessonSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  videoUrl: z.string().url("Must be a valid URL"),
  materialUrl: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  hasQuiz: z.boolean(),
  quizzes: z.array(quizSchema),
});

export const LessonsForm = forwardRef<
  { isFormsValid: () => boolean },
  LessonsFormProps
>(({ lessons, setLessons }, ref) => {
  // Add validation function
  const validateLesson = (lesson: Lesson) => {
    try {
      lessonSchema.parse(lesson);
      return true;
    } catch {
      return false;
    }
  };

  // Expose isFormsValid to parent through ref
  useImperativeHandle(ref, () => ({
    isFormsValid: () => {
      if (lessons.length === 0) {
        toast({
          title: "No Lessons Added",
          description: "Please add at least one lesson before proceeding",
          variant: "destructive",
        });
        return false;
      }
      const allValid = lessons.every(validateLesson);
      if (!allValid) {
        toast({
          title: "Invalid Lessons",
          description: "Please complete all lesson fields correctly",
          variant: "destructive",
        });
        return false;
      }
      return true;
    },
  }));

  const addLesson = () => {
    // Validate last lesson if exists
    if (lessons.length > 0) {
      const lastLesson = lessons[lessons.length - 1];
      if (!validateLesson(lastLesson)) {
        toast({
          title: "Invalid Lesson",
          description:
            "Please complete the current lesson before adding a new one",
          variant: "destructive",
        });
        return;
      }
    }

    setLessons([
      ...lessons,
      {
        id: Date.now().toString(),
        title: "",
        description: "",
        videoUrl: "",
        materialUrl: "",
        hasQuiz: false,
        quizzes: [],
        duration: 0,
        completions: 0,
      },
    ]);
  };

  const removeLesson = (id: string) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };

  const updateLesson = (id: string, field: keyof Lesson, value: any) => {
    const updatedLessons = lessons.map((lesson) =>
      lesson.id === id ? { ...lesson, [field]: value } : lesson
    );
    setLessons(updatedLessons);

    // Validate the updated lesson
    const updatedLesson = updatedLessons.find((l) => l.id === id);
    if (updatedLesson) {
      try {
        lessonSchema.parse(updatedLesson);
      } catch (error) {
        if (error instanceof z.ZodError) {
          // Show error for the specific field if it exists
          const fieldError = error.errors.find((e) => e.path.includes(field));
          if (fieldError) {
            toast({
              title: "Validation Error",
              description: fieldError.message,
              variant: "destructive",
            });
          }
        }
      }
    }
  };

  const toggleQuiz = (id: string) => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === id
          ? {
              ...lesson,
              hasQuiz: !lesson.hasQuiz,
              quizzes: !lesson.hasQuiz ? [] : lesson.quizzes,
            }
          : lesson
      )
    );
  };

  const updateQuiz = (
    lessonId: string,
    quizId: string,
    field: keyof Quiz,
    value: string | number
  ) => {
    const updatedLessons = lessons.map((lesson) =>
      lesson.id === lessonId && lesson.quizzes.some((q) => q.id === quizId)
        ? {
            ...lesson,
            quizzes: lesson.quizzes.map((quiz) =>
              quiz.id === quizId ? { ...quiz, [field]: value } : quiz
            ),
          }
        : lesson
    );
    setLessons(updatedLessons);

    // Validate the updated quiz
    const updatedLesson = updatedLessons.find((l) => l.id === lessonId);
    if (updatedLesson?.quizzes.some((q) => q.id === quizId)) {
      try {
        quizSchema.parse(updatedLesson.quizzes.find((q) => q.id === quizId));
      } catch (error) {
        if (error instanceof z.ZodError) {
          const fieldError = error.errors.find((e) => e.path.includes(field));
          if (fieldError) {
            toast({
              title: "Quiz Validation Error",
              description: fieldError.message,
              variant: "destructive",
            });
          }
        }
      }
    }
  };

  const updateQuizOption = (
    lessonId: string,
    quizId: string,
    index: number,
    value: string
  ) => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === lessonId && lesson.quizzes.some((q) => q.id === quizId)
          ? {
              ...lesson,
              quizzes: lesson.quizzes.map((quiz) =>
                quiz.id === quizId
                  ? {
                      ...quiz,
                      options: quiz.options.map((opt, i) =>
                        i === index ? value : opt
                      ),
                    }
                  : quiz
              ),
            }
          : lesson
      )
    );
  };

  const addQuiz = (lessonId: string) => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === lessonId
          ? {
              ...lesson,
              hasQuiz: true,
              quizzes: [
                ...lesson.quizzes,
                {
                  id: Date.now().toString(),
                  question: "",
                  options: ["", "", "", ""],
                  correctOption: 0,
                },
              ],
            }
          : lesson
      )
    );
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(lessons);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLessons(items);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Lessons</CardTitle>
        <CardDescription>Add and organize your course lessons</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="lessons">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Accordion type="single" collapsible className="space-y-4">
                  {lessons.map((lesson, index) => (
                    <Draggable
                      key={lesson.id}
                      draggableId={lesson.id}
                      index={index}
                    >
                      {(provided) => (
                        <AccordionItem
                          value={lesson.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <div className="flex items-center">
                            <div
                              {...provided.dragHandleProps}
                              className="cursor-move p-2"
                            >
                              <GripVertical className="h-5 w-5 text-gray-500" />
                            </div>
                            <AccordionTrigger className="flex-1">
                              {lesson.title || `Lesson ${index + 1}`}
                            </AccordionTrigger>
                          </div>
                          <AccordionContent className="space-y-4 px-4 pb-4">
                            <div className="space-y-4">
                              <Input
                                placeholder="Lesson title"
                                value={lesson.title}
                                onChange={(e) =>
                                  updateLesson(
                                    lesson.id,
                                    "title",
                                    e.target.value
                                  )
                                }
                              />
                              <Textarea
                                placeholder="Lesson description"
                                value={lesson.description}
                                onChange={(e) =>
                                  updateLesson(
                                    lesson.id,
                                    "description",
                                    e.target.value
                                  )
                                }
                              />
                              <Input
                                placeholder="Video URL"
                                value={lesson.videoUrl}
                                onChange={(e) =>
                                  updateLesson(
                                    lesson.id,
                                    "videoUrl",
                                    e.target.value
                                  )
                                }
                              />
                              <Input
                                placeholder="Lesson material link (optional)"
                                value={lesson.materialUrl}
                                onChange={(e) =>
                                  updateLesson(
                                    lesson.id,
                                    "materialUrl",
                                    e.target.value
                                  )
                                }
                              />
                              <div className="flex items-center space-x-2">
                                <Switch
                                  checked={lesson.hasQuiz}
                                  onCheckedChange={() => toggleQuiz(lesson.id)}
                                />
                                <Label>Include Quiz</Label>
                              </div>

                              {lesson.hasQuiz && (
                                <div className="space-y-4 pt-4">
                                  {lesson.quizzes.map((quiz, quizIndex) => (
                                    <div
                                      key={quiz.id}
                                      className="space-y-4 border p-4 rounded-lg"
                                    >
                                      <div className="flex justify-between items-center">
                                        <h4 className="font-medium">
                                          Quiz {quizIndex + 1}
                                        </h4>
                                        <Button
                                          variant="destructive"
                                          size="sm"
                                          onClick={() => {
                                            setLessons(
                                              lessons.map((l) =>
                                                l.id === lesson.id
                                                  ? {
                                                      ...l,
                                                      quizzes: l.quizzes.filter(
                                                        (q) => q.id !== quiz.id
                                                      ),
                                                      hasQuiz:
                                                        l.quizzes.length > 1,
                                                    }
                                                  : l
                                              )
                                            );
                                          }}
                                        >
                                          <Trash2 className="h-4 w-4" />
                                        </Button>
                                      </div>
                                      <Textarea
                                        placeholder="Quiz question"
                                        value={quiz.question}
                                        onChange={(e) =>
                                          updateQuiz(
                                            lesson.id,
                                            quiz.id,
                                            "question",
                                            e.target.value
                                          )
                                        }
                                      />
                                      {quiz.options.map((option, i) => (
                                        <div
                                          key={i}
                                          className="flex items-center space-x-2"
                                        >
                                          <Input
                                            placeholder={`Option ${i + 1}`}
                                            value={option}
                                            onChange={(e) =>
                                              updateQuizOption(
                                                lesson.id,
                                                quiz.id,
                                                i,
                                                e.target.value
                                              )
                                            }
                                          />
                                          <Button
                                            type="button"
                                            variant="ghost"
                                            className={
                                              quiz.correctOption === i
                                                ? "border-2 border-green-500"
                                                : ""
                                            }
                                            onClick={() =>
                                              updateQuiz(
                                                lesson.id,
                                                quiz.id,
                                                "correctOption",
                                                i
                                              )
                                            }
                                          >
                                            Correct
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  ))}
                                  <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => addQuiz(lesson.id)}
                                  >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Quiz
                                  </Button>
                                </div>
                              )}
                            </div>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => removeLesson(lesson.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove Lesson
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                    </Draggable>
                  ))}
                </Accordion>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <Button onClick={addLesson} variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Lesson
        </Button>
      </CardContent>
    </Card>
  );
});

LessonsForm.displayName = "LessonsForm";
