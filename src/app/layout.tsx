import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import { SidebarInset } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import DashboardHeader from "@/components/dashboard/dashboard-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Softmax Online School",
  description: "Learn and grow with our online courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <DashboardHeader />
              <main className="p-6">{children}</main>
            </SidebarInset>
          </SidebarProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
