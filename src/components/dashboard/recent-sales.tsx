"use client";

import { Avatar } from "@/components/ui/avatar";
import { Sale } from "@/types";

interface RecentSalesProps {
  sales?: Sale[];
}

export function RecentSales({ sales = [] }: RecentSalesProps) {
  if (sales.length === 0) {
    return (
      <div className="flex h-[200px] items-center justify-center text-muted-foreground">
        No recent sales.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {sales.map((sale) => (
        <div key={sale.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-primary/10">
              {sale.studentName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {sale.studentName}
            </p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm font-medium">+${sale.amount.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">{sale.courseName}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
