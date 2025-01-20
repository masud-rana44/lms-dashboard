"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Lesson } from "@/types";
import { Button } from "@/components/ui/button";
import { Book, CheckCircle, Download } from "lucide-react";
import { downloadMaterial } from "@/lib/utils";

interface LessonModalProps {
  lesson: Lesson;
  onClose: () => void;
  onComplete: (lessonId: string) => void;
  isCompleted: boolean;
  onTakeQuiz: (lessonId: string) => void;
}

export function LessonModal({
  lesson,
  onClose,
  onComplete,
  isCompleted,
  onTakeQuiz,
}: LessonModalProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{lesson.title}</DialogTitle>
        </DialogHeader>

        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            src={lesson.videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">{lesson.description}</p>

          <div className="flex gap-2">
            {/* Mark as Complete Button */}
            <Button
              onClick={() => onComplete(lesson.id)}
              className="flex-1"
              disabled={isCompleted}
            >
              {isCompleted ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Completed
                </>
              ) : (
                "Mark as Complete"
              )}
            </Button>

            {/* Download Materials Button */}
            {lesson.materialUrl && (
              <Button
                onClick={() =>
                  downloadMaterial(lesson.materialUrl!, lesson.title)
                }
                variant="outline"
                className="flex-1"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Materials
              </Button>
            )}

            {/* Take Quiz Button */}
            {lesson.hasQuiz && (
              <Button
                onClick={() => onTakeQuiz(lesson.id)}
                variant="outline"
                className="flex-1"
              >
                <Book className="mr-2 h-4 w-4" />
                Take Quiz
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
