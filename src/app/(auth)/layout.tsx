import { Container } from "@/layout/Container";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-full">{children}</div>;
}
