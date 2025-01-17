import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">
          Welcome to Softmax Online School
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Empower your learning journey with our comprehensive online courses
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Go to Dashboard
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
