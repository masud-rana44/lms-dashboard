/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Plus, Trash2, GripVertical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import type { Lesson } from "@/types";

interface LessonFormProps {
  lessons: Lesson[];
  setLessons: (lessons: Lesson[]) => void;
}

export function LessonForm({ lessons, setLessons }: LessonFormProps) {
  const addLesson = () => {
    setLessons([
      ...lessons,
      {
        id: Date.now().toString(),
        title: "",
        description: "",
        videoUrl: "",
        materialUrl: "",
        duration: 0,
        completions: 0,
        hasQuiz: false,
        quizzes: [],
      },
    ]);
  };

  const removeLesson = (index: number) => {
    setLessons(lessons.filter((_, i) => i !== index));
  };

  const updateLesson = (index: number, field: keyof Lesson, value: any) => {
    const updated = [...lessons];
    updated[index] = { ...updated[index], [field]: value };
    setLessons(updated);
  };

  const addQuiz = (lessonIndex: number) => {
    const updated = [...lessons];
    updated[lessonIndex].quizzes.push({
      id: Date.now().toString(),
      question: "",
      options: ["", "", "", ""],
      correctOption: 0,
    });
    setLessons(updated);
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Lessons</h2>
          <Button type="button" onClick={addLesson}>
            <Plus className="h-4 w-4 mr-2" />
            Add Lesson
          </Button>
        </div>

        <div className="space-y-6">
          {lessons.map((lesson, index) => (
            <Card key={lesson.id} className="p-4 relative">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-move">
                <GripVertical className="h-5 w-5 text-gray-400" />
              </div>

              <div className="ml-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1 space-y-4">
                    <Input
                      placeholder="Lesson title"
                      value={lesson.title}
                      onChange={(e) =>
                        updateLesson(index, "title", e.target.value)
                      }
                    />
                    <Textarea
                      placeholder="Lesson description"
                      value={lesson.description}
                      onChange={(e) =>
                        updateLesson(index, "description", e.target.value)
                      }
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeLesson(index)}
                    className="ml-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Video URL"
                    value={lesson.videoUrl}
                    onChange={(e) =>
                      updateLesson(index, "videoUrl", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Material URL"
                    value={lesson.materialUrl}
                    onChange={(e) =>
                      updateLesson(index, "materialUrl", e.target.value)
                    }
                  />
                  <Input
                    type="number"
                    placeholder="Duration (minutes)"
                    value={String(lesson.duration)}
                    onChange={(e) =>
                      updateLesson(index, "duration", parseInt(e.target.value))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={lesson.hasQuiz}
                      onCheckedChange={(checked) =>
                        updateLesson(index, "hasQuiz", checked)
                      }
                    />
                    <span>Include Quiz</span>
                  </div>
                  {lesson.hasQuiz && (
                    <Button
                      size="sm"
                      type="button"
                      variant="outline"
                      onClick={() => addQuiz(index)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Question
                    </Button>
                  )}
                </div>

                {lesson.hasQuiz &&
                  lesson.quizzes.map((quiz, quizIndex) => (
                    <div
                      key={quiz.id}
                      className="space-y-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <Input
                        placeholder="Question"
                        value={quiz.question}
                        onChange={(e) => {
                          const updated = [...lessons];
                          updated[index].quizzes[quizIndex].question =
                            e.target.value;
                          setLessons(updated);
                        }}
                      />
                      {quiz.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="flex items-center gap-2"
                        >
                          <Input
                            placeholder={`Option ${optionIndex + 1}`}
                            value={option}
                            onChange={(e) => {
                              const updated = [...lessons];
                              updated[index].quizzes[quizIndex].options[
                                optionIndex
                              ] = e.target.value;
                              setLessons(updated);
                            }}
                          />
                          <Switch
                            checked={quiz.correctOption === optionIndex}
                            onCheckedChange={() => {
                              const updated = [...lessons];
                              updated[index].quizzes[quizIndex].correctOption =
                                optionIndex;
                              setLessons(updated);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}
