import "semantic-ui-css/semantic.min.css";
import RedirectIfNotAuthenticated from "./_components/page/RedirectIfNotAuthenticated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enform",
  description: "Assine um plano e torne-se um cliente exclusivo do Enform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RedirectIfNotAuthenticated>{children}</RedirectIfNotAuthenticated>
      </body>
    </html>
  );
}
