import { MarketplaceProperties } from "@/types";
import HomeClient from "./_components/page/HomeClient";
import { getServerSession } from "./api/auth/[...nextauth]";
import MicrosoftMarketplaceApi from "@/libraries/microsoft-marketplace-api";
import MicrosoftGraphApi from "@/libraries/microsoft-graph-api";
import { Metadata } from "next";

interface PageProps {
  params: { id: string };
  searchParams: { token: string };
}

export default async function Page({ searchParams }: PageProps) {
  const { token: marketplaceToken } = searchParams;
  if (!marketplaceToken) {
    throw new Error("You need a marketplace token to access this page");
  }

  const data = await getLandingPageData(searchParams.token);
  return <HomeClient {...data} />;
}

async function getLandingPageData(marketplaceToken: string) {
  const session = await getServerSession();
  if (!session) {
    throw new Error("You must be logged in to access this page");
  }

  const { decodedToken } = decodeToken(marketplaceToken);

  const [properties, moreUserInfo] = await Promise.all([
    MicrosoftMarketplaceApi.resolveSubscription(decodedToken),
    MicrosoftGraphApi.getUserInfo(),
  ]);

  return {
    properties,
    user: {
      ...session.user,
      ...moreUserInfo,
    },
  };
}

function decodeToken(token: string): {
  decodedToken: string;
  properties: MarketplaceProperties;
} {
  const buff = Buffer.from(token, "base64");
  const str = buff.toString("utf8").replace(/\n/g, "");
  const tokenProperties = JSON.parse(str);
  return {
    decodedToken: decodeURIComponent(token),
    properties: tokenProperties,
  };
}

export const metadata: Metadata = {
  title: "Enform | Activate your subscription",
  description:
    "Confirm your subscription to Enform and start using our services",
};

export type LandingPageData = Awaited<ReturnType<typeof getLandingPageData>>;
