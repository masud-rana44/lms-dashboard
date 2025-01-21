import { useSession } from "next-auth/react";
import { mockUsers } from "@/lib/mock-data";
import { useMemo } from "react";
import { User } from "@/types";

export function useUser() {
  const { data: session, status } = useSession();

  const email = session?.user?.email;

  const currentUser: User = {
    id: 100,
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    avatar: session?.user?.image || "",
    role: "student",
  };

  function getUserByEmail(email: string | null | undefined) {
    if (!email || !Array.isArray(mockUsers)) return null;
    return mockUsers.find((user) => user.email === email) ?? null;
  }

  const user = useMemo(
    () => getUserByEmail(email) || currentUser,
    [email, mockUsers, currentUser]
  );

  if (status === "authenticated" && !user) {
    console.warn(`User with email ${email} not found in mock data.`);
  }

  return {
    user,
    isLoading: status === "loading",
    isAuthenticated: !!session,
  };
}
