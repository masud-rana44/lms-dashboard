import React from "react";

interface StatsCardProps {
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  title: string;
  value: string | number;
}

export function StatsCard({
  icon,
  bgColor,
  textColor,
  title,
  value,
}: StatsCardProps) {
  return (
    <div className="p-4 flex items-center space-x-4">
      <div className={`p-3 rounded-full ${bgColor}`}>
        <div className={`h-6 w-6 ${textColor}`}>{icon}</div>
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
