"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lesson, LessonsForm } from "./lessons-form";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const courseFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z
    .string()
    .refine((val) => !isNaN(Number(val)), "Must be a valid number"),
  prerequisites: z.string(),
  imageUrl: z.string().url("Must be a valid URL").optional(),
});

const steps = [
  {
    id: "basic",
    title: "Basic Information",
    description: "Enter the basic details of your course",
  },
  {
    id: "content",
    title: "Course Content",
    description: "Add lessons and quizzes",
  },
  {
    id: "pricing",
    title: "Pricing & Requirements",
    description: "Set your course price and prerequisites",
  },
];

export function CourseCreationForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const form = useForm<z.infer<typeof courseFormSchema>>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      prerequisites: "",
      imageUrl: "",
    },
  });

  const { isValid } = form.formState;

  const onNext = async () => {
    const fields =
      steps[currentStep].id === "basic"
        ? ["title", "description", "imageUrl"]
        : steps[currentStep].id === "pricing"
        ? ["price", "prerequisites"]
        : [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = await form.trigger(fields as any);
    if (output) {
      setCurrentStep((current) => current + 1);
    }
  };

  async function onSubmit(values: z.infer<typeof courseFormSchema>) {
    try {
      setIsLoading(true);
      const response = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to create course");
      }

      const data = await response.json();
      toast({
        title: "Success",
        description: "Course created successfully",
      });
      router.push(`/dashboard/courses/${data.id}`);
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border-2",
                currentStep > index
                  ? "border-primary bg-primary text-primary-foreground"
                  : currentStep === index
                  ? "border-primary"
                  : "border-muted"
              )}
            >
              {currentStep > index ? (
                <CheckCircle2 className="h-6 w-6" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div
              className={cn(
                "ml-4 hidden md:block",
                currentStep >= index
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <p className="text-sm font-medium">{step.title}</p>
              <p className="text-sm">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "ml-4 h-[2px] w-20",
                  currentStep > index ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {currentStep === 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter the basic details of your course
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. 'Advanced web development'"
                          {...field}
                        />
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
                          placeholder="e.g. 'This course is about...'"
                          {...field}
                        />
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
                        <Input placeholder="Enter image URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          )}

          {currentStep === 1 && (
            <LessonsForm lessons={lessons} setLessons={setLessons} />
          )}

          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Requirements</CardTitle>
                <CardDescription>
                  Set your course price and prerequisites
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  name="prerequisites"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prerequisites</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter course prerequisites"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        List any prerequisites students should know before
                        taking this course
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep((step) => step - 1)}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            {currentStep === steps.length - 1 ? (
              <Button type="submit" disabled={isLoading || !isValid}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Create Course
              </Button>
            ) : (
              <Button type="button" onClick={onNext}>
                Next
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
