import { MarketplaceProperties } from "@/types";
import ApiInstance from "../instance";

const API_VERSION = "2018-08-31";

async function resolveSubscription(
  marketplaceToken: string
): Promise<MarketplaceProperties> {
  const response = await ApiInstance.post(
    `/api/saas/subscriptions/resolve?api-version${API_VERSION}`,
    {
      "x-ms-marketplace-token": marketplaceToken,
    }
  );
  return response.data;
}

interface ActivateSubscriptionBody {
  planId: string;
  quantity: number | undefined;
}

async function activateSubscription(
  subscriptionId: string,
  body: ActivateSubscriptionBody
) {
  const response = await ApiInstance.post(
    `/api/saas/subscriptions/${subscriptionId}/activate?api-version${API_VERSION}`,
    body
  );
  return response.data;
}

export { resolveSubscription, activateSubscription };
