import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Lesson } from "@/types";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Props {
  lessons: Lesson[];
}

export default function LessonCompletionChart({ lessons }: Props) {
  const data = {
    labels: lessons.map((lesson) => lesson.title),
    datasets: [
      {
        label: "Completions",
        data: lessons.map((lesson) => lesson.completions),
        backgroundColor: "#4F46E5",
      },
    ],
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <Bar data={data} />
    </div>
  );
}
