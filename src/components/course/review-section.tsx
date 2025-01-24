"use client";

import { useState } from "react";
import { Star, ThumbsUp, MoreVertical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReviewForm } from "./review-form";

interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  content: string;
  createdAt: string;
  helpfulCount: number;
  isHelpful?: boolean;
}

// Mock reviews data
const mockReviews: Review[] = [
  {
    id: "1",
    userId: "user1",
    userName: "Sarah Mitchell",
    userAvatar: "https://avatar.iran.liara.run/public",
    rating: 5,
    content:
      "This course exceeded my expectations! The instructor explains complex concepts in a very clear and engaging way. The practical exercises really helped reinforce the learning.",
    createdAt: "2024-02-15",
    helpfulCount: 24,
  },
  {
    id: "2",
    userId: "user2",
    userName: "James Wilson",
    userAvatar: "https://avatar.iran.liara.run/public/boy",
    rating: 4,
    content:
      "Great course content and structure. The only reason I'm not giving 5 stars is that some of the advanced topics could use more detailed explanations.",
    createdAt: "2024-02-10",
    helpfulCount: 18,
  },
];

export function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [sortBy, setSortBy] = useState<"recent" | "helpful">("recent");

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return b.helpfulCount - a.helpfulCount;
  });

  const handleHelpful = (reviewId: string) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === reviewId) {
          const wasHelpful = review.isHelpful;
          return {
            ...review,
            helpfulCount: wasHelpful
              ? review.helpfulCount - 1
              : review.helpfulCount + 1,
            isHelpful: !wasHelpful,
          };
        }
        return review;
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Reviews Summary */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold">
                {averageRating.toFixed(1)}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= averageRating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Based on {reviews.length} reviews
                </p>
              </div>
            </div>

            <Button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="w-full md:w-auto"
            >
              Write a Review
            </Button>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <div className="flex items-center w-24">
                  {Array(rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{
                        width: `${
                          ((ratingCounts[rating] || 0) / reviews.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
                <div className="w-12 text-sm text-gray-500">
                  {ratingCounts[rating] || 0}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Review Form */}
      {showReviewForm && <ReviewForm />}

      {/* Reviews List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Reviews</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort by: {sortBy === "recent" ? "Most Recent" : "Most Helpful"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSortBy("recent")}>
                Most Recent
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("helpful")}>
                Most Helpful
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {sortedReviews.map((review) => (
          <Card key={review.id} className="p-6">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarImage src={review.userAvatar} alt="User avatar" />
                  <AvatarFallback>{review.userName.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{review.userName}</h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <p className="mt-4 text-gray-600">{review.content}</p>

            <div className="mt-4 flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className={review.isHelpful ? "text-primary" : ""}
                onClick={() => handleHelpful(review.id)}
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                Helpful ({review.helpfulCount})
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
