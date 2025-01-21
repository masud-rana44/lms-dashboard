import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/403", req.url));
  }
  if (pathname.startsWith("/instructor") && token.role !== "instructor") {
    return NextResponse.redirect(new URL("/403", req.url));
  }
  if (pathname.startsWith("/student") && token.role !== "student") {
    return NextResponse.redirect(new URL("/403", req.url));
  }

  if (pathname === "/" || pathname === "/dashboard") {
    if (token.role === "admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } else if (token.role === "instructor") {
      return NextResponse.redirect(new URL("/instructor/dashboard", req.url));
    } else if (token.role === "student") {
      return NextResponse.redirect(new URL("/student/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/instructor/:path*",
    "/student/:path*",
    "/dashboard",
    "/",
  ],
};
