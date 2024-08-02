import { Container } from "@/layout/Container";
import DashboardWrapper from "@/layout/DashboardWrapper";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper className="w-full h-screen">{children}</DashboardWrapper>
  );
}
