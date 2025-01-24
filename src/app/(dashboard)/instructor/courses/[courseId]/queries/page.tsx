"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageSquare, Users, Clock, CheckCircle, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUser } from "@/hooks/use-user";
import { useParams } from "next/navigation";
import { StatsCard } from "@/components/stats-card";
import coursesApi from "@/services/coursesApi";

export default function CourseDiscussions() {
  const { courseId } = useParams();
  const { user } = useUser();
  const [queries, setQueries] = useState(
    () => coursesApi.getAll().find((c) => c.id === courseId)?.queries || []
  );
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  // Analytics data
  const analytics = {
    totalQueries: queries.length,
    openQueries: queries.filter((q) => q.status === "open").length,
    averageResponseTime: "2.5 hours",
    responseRate: "92%",
  };

  const filteredQueries = queries.filter((query) => {
    const matchesSearch =
      query.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" || (filter === "open" && query.status === "open");
    return matchesSearch && matchesFilter;
  });

  const handleReply = (queryId: string) => {
    if (!replyContent.trim()) return;

    setQueries(
      queries.map((q) =>
        q.id === queryId
          ? {
              ...q,
              status: "answered",
              answers: [
                ...(q.answers || []),
                {
                  id: Date.now().toString(),
                  queryId,
                  userId: "2", // Mock instructor ID
                  content: replyContent,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : q
      )
    );
    setReplyContent("");
    setSelectedQuery(null);
  };

  return (
    <div>
      {/* Analytics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          icon={<MessageSquare />}
          bgColor="bg-blue-100"
          textColor="text-blue-600"
          title="Total Queries"
          value={analytics.totalQueries}
        />
        <StatsCard
          icon={<Clock />}
          bgColor="bg-yellow-100"
          textColor="text-yellow-600"
          title="Avg. Response Time"
          value={analytics.averageResponseTime}
        />
        <StatsCard
          icon={<CheckCircle />}
          bgColor="bg-green-100"
          textColor="text-green-600"
          title="Response Rate"
          value={analytics.responseRate}
        />
        <StatsCard
          icon={<Users />}
          bgColor="bg-purple-100"
          textColor="text-purple-600"
          title="Open Queries"
          value={analytics.openQueries}
        />
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Queries</SelectItem>
            <SelectItem value="open">Open Queries</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Empty Discussion */}
      {filteredQueries.length === 0 && (
        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
          <p className="text-gray-500">
            No discussions found. Try changing the search query or filter.
          </p>
        </div>
      )}

      {/* Discussions List */}
      <div className="space-y-4">
        {filteredQueries.map((query) => (
          <Card key={query.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src="/assets/user-avatar.webp"
                    alt="Student avatar"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{query.title}</h3>
                  <p className="text-sm text-gray-500">
                    Posted on {new Date(query.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <Badge
                variant={query.status === "open" ? "default" : "secondary"}
                className="capitalize"
              >
                {query.status}
              </Badge>
            </div>

            <p className="text-gray-700 mb-4">{query.description}</p>

            {/* Answers Section */}
            {query.answers && query.answers.length > 0 && (
              <div className="ml-8 space-y-4 border-l-2 border-gray-100 pl-4 mt-4">
                {query.answers.map((answer) => (
                  <div key={answer.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-8 w-8 rounded-full overflow-hidden">
                        <Image
                          src={user?.avatar || "/assets/placeholder-avatar.jpg"}
                          alt="Instructor avatar"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Instructor</p>
                        <p className="text-xs text-gray-500">
                          {new Date(answer.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700">{answer.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Reply Section */}
            {selectedQuery === query.id ? (
              <div className="mt-4">
                <textarea
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Write your response..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                />
                <div className="flex justify-end space-x-2 mt-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedQuery(null);
                      setReplyContent("");
                    }}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => handleReply(query.id)}>
                    Post Response
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSelectedQuery(query.id)}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Reply
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
