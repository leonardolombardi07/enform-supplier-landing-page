import ApiInstance from "./instance";
import * as subscriptionsRoutes from "./subscriptions";

// Leo: Documentation on 27/06/2023:
// https://learn.microsoft.com/en-us/partner-center/marketplace/marketplace-apis-guide

const Api = Object.assign(
  {
    ...subscriptionsRoutes,
  },
  ApiInstance
);

export default Api;
