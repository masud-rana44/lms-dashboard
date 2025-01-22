"use client";

import * as React from "react";

import { NavUser } from "@/components/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  BookOpen,
  Users,
  BarChart,
  Settings,
  BadgePlus,
} from "lucide-react";
import { useUser } from "@/hooks/use-user";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navigationLinks = {
  admin: [
    { name: "Dashboard", href: "/admin/dashboard", icon: Home },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Roles & Permissions", href: "/admin/roles", icon: Settings },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart },
    { name: "Reports", href: "/admin/reports", icon: BarChart },
  ],
  instructor: [
    { name: "Dashboard", href: "/instructor/dashboard", icon: Home },
    { name: "My Courses", href: "/instructor/courses", icon: BookOpen },
    {
      name: "Create Course",
      href: "/instructor/create-course",
      icon: BadgePlus,
    },
  ],
  student: [
    { name: "Dashboard", href: "/student/dashboard", icon: Home },
    { name: "My Courses", href: "/student/courses", icon: BookOpen },
    { name: "Feedback", href: "/student/feedback", icon: Settings },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const pathname = usePathname();

  const userNavigation = navigationLinks[user?.role || "student"];

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              {/* LOGO */}
              <Link href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image
                    width={32}
                    height={32}
                    src="/assets/logo.png"
                    alt="Softmax online school logo"
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Softmax</span>
                  <span className="truncate text-xs">Online School</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* NAVIGATION LINKS */}
      <SidebarContent>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1">
            {userNavigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              // const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-sidebar-accent",
                    isActive && "bg-sidebar-accent"
                  )}
                >
                  <Icon className="mr-3 h-6 w-6" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
