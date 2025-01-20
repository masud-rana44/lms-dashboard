"use client";

import { useState } from "react";
import type { Query } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DiscussionBoardProps {
  queries: Query[] | undefined;
}

export function DiscussionBoard({ queries }: DiscussionBoardProps) {
  const [newQuery, setNewQuery] = useState("");

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Course Discussions</h2>
        <div className="space-y-4">
          <Textarea
            placeholder="Ask a question..."
            value={newQuery}
            onChange={(e) => setNewQuery(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-end">
            <Button>Post Question</Button>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {queries?.map((query) => (
          <Card key={query.id} className="p-6">
            <div className="flex space-x-4">
              <Avatar>
                <AvatarImage src="/assets/user-avatar.webp" alt="User avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">{query.title}</h3>
                <p className="text-gray-600 mt-2">{query.description}</p>

                {query.answers?.map((answer) => (
                  <div
                    key={answer.id}
                    className="mt-4 pl-8 border-l-2 border-gray-100"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar>
                        <AvatarImage
                          src="/assets/placeholder-avatar.jpg"
                          alt="Instructor avatar"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Instructor</p>
                        <p className="text-xs text-gray-500">
                          {new Date(answer.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600">{answer.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
