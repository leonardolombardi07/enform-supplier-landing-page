import { Subscription } from "@/types";
import { Metadata } from "next";
import ClientView from "./_components/ClientView";
import axios from "axios";

export interface PageProps {
  params: { id: string };
  searchParams: { _sub: string };
}

export default async function Page(props: PageProps) {
  const subscription = await getPurchasePageData(props);
  return <ClientView subscription={subscription} {...props} />;
}

async function getPurchasePageData({ searchParams: { _sub } }: PageProps) {
  // Leo: we don't want to throw an error in case something fails here, because we want to show the page anyway
  try {
    // Leo: we may need the token in the future, but for now we don't need it
    // const { access_token } = await getAccessToken();
    const { data } = await axios.get(
      `${process.env.MONA_AZURE_BLOB_STORAGE_URL}${decodeURIComponent(_sub)}`,
      {
        headers: {
          "x-ms-version": "2017-11-09",
          "x-ms-date": new Date().toUTCString(),
        },
      }
    );
    return data as Subscription;
  } catch (error) {
    console.error(error);
    return null;
  }
}

interface TokenResponse {
  token_type: string;
  expires_in: number; // seconds
  access_token: string;

  // Leo: the response can contain more things, but they are not relevant for us
  [key: string]: any;
}

async function getAccessToken(): Promise<TokenResponse> {
  const { data } = await axios.post(
    `https://login.microsoftonline.com/${process.env.MONA_AZURE_TENANT_ID}/oauth2/token`,
    {
      grant_type: "client_credentials",
      client_id: process.env.MONA_AZURE_CLIENT_ID,
      client_secret: process.env.MONA_AZURE_CLIENT_SECRET,
      scope: process.env.MONA_AZURE_SCOPE,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return data as TokenResponse;
}

export const metadata: Metadata = {
  title: "Enform | Subscription Created",
  description:
    "Your subscription was created. We'll be contacting you to activate your subscription and enable the use of our product",
};

export type LandingPageData = Awaited<ReturnType<typeof getPurchasePageData>>;
