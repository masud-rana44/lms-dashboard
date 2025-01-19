import { AppSidebar } from "@/components/dashboard/app-sidebar";
import DashboardHeader from "@/components/dashboard/dashboard-header";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
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
