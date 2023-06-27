import axios from "axios";
import { getServerSession } from "@/app/api/auth/[...nextauth]";

const ApiInstance = axios.create({
  baseURL: "https://marketplaceapi.microsoft.com",
  headers: {
    "content-type": "application/json",
  },
});

ApiInstance.interceptors.request.use(
  async (config) => {
    const session = await getServerSession();
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ApiInstance;
