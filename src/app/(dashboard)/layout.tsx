export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Dashboard Layout callled....");
  return (
    <div className="flex min-h-screen flex-col">
      <div>{children}</div>
    </div>
  );
}
