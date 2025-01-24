import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { User } from "@/types";
import { mockCourses } from "@/lib/mock-data";

// Register the required components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 0,
        autoSkip: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const CourseProgressChart = ({ user }: { user: User }) => {
  const instructedCourses = mockCourses.filter(
    (course) => course.instructor.id === user.id
  );

  const chartData = {
    labels: instructedCourses.map((course) => course.title),
    datasets: [
      {
        label: "Enrolled Students",
        data: instructedCourses.map((course) => course.enrolledStudents.length),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="lg:col-span-8 space-y-6">
      <div className="bg-white p-6 ">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Number of students enrolled in your courses
        </h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default CourseProgressChart;
