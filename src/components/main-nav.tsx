"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  const role = "ADMIN";

  const routes = [
    {
      href: "/dashboard",
      label: "Overview",
      active: pathname === "/dashboard",
      roles: ["ADMIN", "INSTRUCTOR", "STUDENT"],
    },
    {
      href: "/dashboard/courses",
      label: "Courses",
      active: pathname === "/dashboard/courses",
      roles: ["ADMIN", "INSTRUCTOR", "STUDENT"],
    },
    {
      href: "/dashboard/users",
      label: "Users",
      active: pathname === "/dashboard/users",
      roles: ["ADMIN"],
    },
    {
      href: "/dashboard/analytics",
      label: "Analytics",
      active: pathname === "/dashboard/analytics",
      roles: ["ADMIN", "INSTRUCTOR"],
    },
  ].filter((route) => route.roles.includes(role as string));

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
