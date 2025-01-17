export interface DashboardStats {
  enrolledCount: number;
  inProgressCount: number;
  overallProgress: number;
  completedCount: number;
  completedThisMonth: number;
  certificatesCount: number;
  latestCertificate: string;
  courses: {
    id: string;
    title: string;
    progress: number;
    status: "not-started" | "in-progress" | "completed";
    lastAccessed: string;
  }[];
}
