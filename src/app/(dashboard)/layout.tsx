"use client";

import { useEffect } from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import { initializeCourses } from "@/services/initCourses";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initializeCourses();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <main className="p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
