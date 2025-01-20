"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Lesson } from "@/types";
import { Button } from "@/components/ui/button";
import { downloadMaterial } from "@/lib/utils";

interface LessonModalProps {
  lesson: Lesson;
  onClose: () => void;
}

export function LessonModal({ lesson, onClose }: LessonModalProps) {
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

          {lesson.materialUrl && (
            <Button
              onClick={() =>
                downloadMaterial(lesson.materialUrl!, lesson.title)
              }
              variant="outline"
              className="w-full"
            >
              Download Course Materials
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
