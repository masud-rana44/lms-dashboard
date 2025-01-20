"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Trash2, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { LessonForm } from "./lesson-form";
import type { Course } from "@/types";
import { toast } from "@/hooks/use-toast";

const courseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((val) => !isNaN(Number(val)), "Must be a valid number"),
  imageUrl: z.string().url("Must be a valid URL"),
  prerequisites: z.array(z.string()),
});

interface CourseFormProps {
  initialData?: Course;
  onSubmit: (data: Course) => void;
}

export function CourseForm({ initialData, onSubmit }: CourseFormProps) {
  const router = useRouter();
  const [prerequisites, setPrerequisites] = useState<string[]>(
    initialData?.prerequisites || []
  );
  const [lessons, setLessons] = useState(initialData?.lessons || []);

  const form = useForm({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      price: initialData?.price.toString() || "",
      imageUrl: initialData?.imageUrl || "",
      prerequisites: initialData?.prerequisites || [],
    },
  });

  const addPrerequisite = () => {
    setPrerequisites([...prerequisites, ""]);
  };

  const removePrerequisite = (index: number) => {
    setPrerequisites(prerequisites.filter((_, i) => i !== index));
  };

  const updatePrerequisite = (index: number, value: string) => {
    const updated = [...prerequisites];
    updated[index] = value;
    setPrerequisites(updated);
  };

  const handleSubmit = (values: z.infer<typeof courseSchema>) => {
    const courseData = {
      ...values,
      price: parseFloat(values.price),
      prerequisites,
      lessons,
      id: initialData?.id || Date.now().toString(),
      rating: initialData?.rating || 0,
      enrolledStudents: initialData?.enrolledStudents || 0,
      imageUrl: initialData?.imageUrl || "",
      instructor: initialData?.instructor || {
        id: "inst1",
        name: "Sarah Johnson",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
      },
      queries: initialData?.queries || [],
    };

    onSubmit(courseData);
    toast({
      title: "Success",
      description: `Course ${
        initialData ? "updated" : "created"
      } successfully!`,
    });
    router.push("/dashboard/courses");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <Card className="p-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Course Details</h2>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter course title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter course description"
                      className="h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price ($)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Image URL</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input {...field} />
                        <Button type="button" variant="outline" size="icon">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <FormLabel>Prerequisites</FormLabel>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addPrerequisite}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Prerequisite
                </Button>
              </div>

              {prerequisites.map((prerequisite, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={prerequisite}
                    onChange={(e) => updatePrerequisite(index, e.target.value)}
                    placeholder="Enter prerequisite"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removePrerequisite(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <LessonForm lessons={lessons} setLessons={setLessons} />

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/dashboard/courses")}
          >
            Cancel
          </Button>
          <Button type="submit">
            {initialData ? "Update Course" : "Create Course"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
