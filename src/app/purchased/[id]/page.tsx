import { Subscription } from "@/types";
import { Metadata } from "next";
import ClientView from "./_components/ClientView";
import axios from "axios";

interface PageProps {
  params: { id: string };
  searchParams: { _sub: string };
}

export default async function Page(props: PageProps) {
  const subscription = await getPurchasePageData(props);
  return (
    <ClientView>
      <h3>Subscription Data</h3>
      <pre>
        <code>{JSON.stringify(subscription, null, 2)}</code>
      </pre>
    </ClientView>
  );
}

async function getPurchasePageData(props: PageProps) {
  const {
    params: { id: subscriptionId },
    searchParams: { _sub },
  } = props;

  const BASE_STORAGE_URL = "https://enformstorage.blob.core.windows.net";
  const decoded_sub = decodeURIComponent(_sub);

  const fetchSubscriptionUrl = `${BASE_STORAGE_URL}${decoded_sub}`;
  const { data } = await axios.get(fetchSubscriptionUrl);
  return data as Subscription;
}

export const metadata: Metadata = {
  title: "Enform | Subscription Created",
  description:
    "Your subscription was created. We'll be contacting you to activate your subscription and enable the use of our product",
};

export type LandingPageData = Awaited<ReturnType<typeof getPurchasePageData>>;
