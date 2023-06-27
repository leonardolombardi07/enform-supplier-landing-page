import ApiInstance from "./instance";

// Leo: Documentation on 27/06/2023:
// https://learn.microsoft.com/en-us/partner-center/marketplace/marketplace-apis-guide

async function getUserInfo() {
  return {
    company: "RBNA",
  };
}

const Api = Object.assign(
  {
    getUserInfo,
  },
  ApiInstance
);

export default Api;
