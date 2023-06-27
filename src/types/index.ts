export interface Subscription {
  id: string;
  publisherId: string;
  offerId: string;
  name: string;
  saasSubscriptionStatus:
    | "PendingFulfillmentStart"
    | "Subscribed"
    | "Unsubscribed"
    | "Suspended";
  beneficiary: {
    emailId: string;
    objectId: string;
    tenantId: string;
    puid: string;
  };
  purchaser: {
    emailId: string;
    objectId: string;
    tenantId: string;
    puid: string;
  };
  planId: string;
  term: {
    termUnit: string;
    startDate?: Date;
    endDate?: Date;
  };
  autoRenew: boolean;
  isTest: boolean;
  isFreeTrial: boolean;
  allowedCustomerOperations: string[];
  sandboxType: string;
  lastModified: Date;
  quantity?: number;
  sessionMode: string;
}

export type MarketplaceProperties = Partial<Subscription> & { id: string };
