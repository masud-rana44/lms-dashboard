import { Query } from "@/types";

interface Props {
  queries: Query[];
  filter: "open" | "answered" | "all";
}

export default function QueryList({ queries, filter }: Props) {
  const filteredQueries =
    filter === "all"
      ? queries
      : queries.filter((query) => query.status === filter);

  return (
    <div className="space-y-4">
      {filteredQueries.map((query) => (
        <div key={query.id} className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-sm font-semibold text-gray-800">{query.title}</h3>
          <p className="text-gray-600 text-sm">{query.description}</p>
          <div className="text-xs text-gray-500 mt-2">
            Created At: {new Date(query.createdAt).toLocaleDateString()}
          </div>
          {query.status === "answered" && query.answers && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-800">Answers</h4>
              {query.answers.map((answer) => (
                <p key={answer.id} className="text-sm text-gray-600">
                  {answer.content}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
