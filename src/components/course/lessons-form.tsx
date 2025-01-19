/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus, Trash2, GripVertical } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

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

interface Quiz {
  question: string;
  options: string[];
  correctOption: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  materialUrl?: string;
  hasQuiz: boolean;
  quiz?: Quiz;
}

interface LessonsFormProps {
  lessons: Lesson[];
  setLessons: (lessons: Lesson[]) => void;
}

export function LessonsForm({ lessons, setLessons }: LessonsFormProps) {
  const addLesson = () => {
    setLessons([
      ...lessons,
      {
        id: Date.now().toString(),
        title: "",
        description: "",
        videoUrl: "",
        materialUrl: "",
        hasQuiz: false,
      },
    ]);
  };

  const removeLesson = (id: string) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };

  const updateLesson = (id: string, field: keyof Lesson, value: any) => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === id ? { ...lesson, [field]: value } : lesson
      )
    );
  };

  const toggleQuiz = (id: string) => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === id
          ? {
              ...lesson,
              hasQuiz: !lesson.hasQuiz,
              quiz: !lesson.hasQuiz
                ? { question: "", options: ["", "", "", ""], correctOption: 0 }
                : undefined,
            }
          : lesson
      )
    );
  };

  const updateQuiz = (
    lessonId: string,
    field: keyof Quiz,
    value: string | number
  ) => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === lessonId && lesson.quiz
          ? { ...lesson, quiz: { ...lesson.quiz, [field]: value } }
          : lesson
      )
    );
  };

  const updateQuizOption = (lessonId: string, index: number, value: string) => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === lessonId && lesson.quiz
          ? {
              ...lesson,
              quiz: {
                ...lesson.quiz,
                options: lesson.quiz.options.map((opt, i) =>
                  i === index ? value : opt
                ),
              },
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
                                placeholder="Lesson material"
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

                              {lesson.hasQuiz && lesson.quiz && (
                                <div className="space-y-4 pt-4">
                                  <Textarea
                                    placeholder="Quiz question"
                                    value={lesson.quiz.question}
                                    onChange={(e) =>
                                      updateQuiz(
                                        lesson.id,
                                        "question",
                                        e.target.value
                                      )
                                    }
                                  />
                                  {lesson.quiz.options.map((option, i) => (
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
                                            i,
                                            e.target.value
                                          )
                                        }
                                      />
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        className={
                                          lesson.quiz?.correctOption === i
                                            ? "border-2 border-green-500"
                                            : ""
                                        }
                                        onClick={() =>
                                          updateQuiz(
                                            lesson.id,
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
}
