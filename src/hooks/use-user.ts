import { useSession } from "next-auth/react";
import { mockUsers } from "@/lib/mock-data";

export function useUser() {
  const { data: session, status } = useSession();

  const user = session?.user?.email
    ? mockUsers.find((user) => user.email === session.user?.email) ?? null
    : null;

  return {
    user,
    isLoading: status === "loading",
    isAuthenticated: !!session,
  };
}
