import { useSession } from "next-auth/react";
import { mockUsers } from "@/lib/mock-data";
import { useMemo } from "react";

export function useUser() {
  const { data: session, status } = useSession();

  const email = session?.user?.email;

  function getUserByEmail(email: string | null | undefined) {
    if (!email || !Array.isArray(mockUsers)) return null;
    return mockUsers.find((user) => user.email === email) ?? null;
  }

  const user = useMemo(() => getUserByEmail(email), [email, mockUsers]);

  if (status === "authenticated" && !user) {
    console.warn(`User with email ${email} not found in mock data.`);
  }

  return {
    user,
    isLoading: status === "loading",
    isAuthenticated: !!session,
  };
}
