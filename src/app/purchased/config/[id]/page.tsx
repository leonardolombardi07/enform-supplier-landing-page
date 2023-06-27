import { Metadata } from "next";
import ClientView from "./_components/ClientView";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string };
}

export default function Page(props: PageProps) {
  return (
    <ClientView>
      {process.env.NODE_ENV === "development" && (
        <div>
          <h3>Debug</h3>
          <pre>
            <code>{JSON.stringify(props, null, 2)}</code>
          </pre>
        </div>
      )}
    </ClientView>
  );
}

export const metadata: Metadata = {
  title: "Enform | Subscription Configuration",
  description:
    "This is the configuration page for your subscription. Here you can configure your subscription and manage your subscription's users",
};
