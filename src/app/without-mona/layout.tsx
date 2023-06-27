import RedirectIfNotAuthenticated from "./_components/page/RedirectIfNotAuthenticated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enform",
  description: "Assine um plano e torne-se um cliente exclusivo do Enform",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RedirectIfNotAuthenticated>{children}</RedirectIfNotAuthenticated>;
}
