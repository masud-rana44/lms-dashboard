"use client";

import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import type { Quiz } from "@/types";

interface QuizModalProps {
  quiz: Quiz;
  onClose: () => void;
}

export function QuizModal({ quiz, onClose }: QuizModalProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalQuestions = quiz ? 1 : 0;

  const handleSubmit = () => {
    if (selectedOption === null) return;

    if (selectedOption === quiz.correctOption) {
      setScore(score + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      onClose();
    }
  };

  if (!quiz) return null;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Quiz</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              <span>
                Score: {score}/{totalQuestions}
              </span>
            </div>
            <Progress value={((currentQuestion + 1) / totalQuestions) * 100} />
          </div>

          {/* Question */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{quiz.question}</h3>

            <RadioGroup
              value={selectedOption?.toString()}
              onValueChange={(value) => setSelectedOption(parseInt(value))}
              className="space-y-3"
              disabled={isSubmitted}
            >
              {quiz.options.map((option: string, index: number) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-4 rounded-lg border ${
                    isSubmitted
                      ? index === quiz.correctOption
                        ? "border-green-500 bg-green-50"
                        : index === selectedOption
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer"
                  >
                    {option}
                  </Label>
                  {isSubmitted && (
                    <>
                      {index === quiz.correctOption ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : index === selectedOption ? (
                        <XCircle className="h-5 w-5 text-red-500" />
                      ) : null}
                    </>
                  )}
                </div>
              ))}
            </RadioGroup>
          </div>

          {isSubmitted && (
            <div
              className={`p-4 rounded-lg ${
                selectedOption === quiz.correctOption
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <p
                className={`font-medium ${
                  selectedOption === quiz.correctOption
                    ? "text-green-800"
                    : "text-red-800"
                }`}
              >
                {selectedOption === quiz.correctOption
                  ? "Correct! Well done!"
                  : "Incorrect. Try again!"}
              </p>
              <p className="mt-2 text-gray-600">
                Explanation: The useState Hook allows you to add state to
                functional components, making it possible to track and update
                values over time.
              </p>
            </div>
          )}
        </div>

        <DialogFooter>
          {!isSubmitted ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="w-full sm:w-auto"
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNext} className="w-full sm:w-auto">
              {currentQuestion + 1 < totalQuestions
                ? "Next Question"
                : "Finish Quiz"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
