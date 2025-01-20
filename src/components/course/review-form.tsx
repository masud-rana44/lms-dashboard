"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Write a Review</h2>

      <div className="flex items-center space-x-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className="focus:outline-none"
          >
            <Star
              className={`h-6 w-6 ${
                star <= rating
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>

      <Textarea
        placeholder="Share your experience with this course..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="min-h-[100px] mb-4"
      />

      <Button>Submit Review</Button>
    </Card>
  );
}
