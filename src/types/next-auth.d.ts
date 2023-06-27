import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

interface AzureADAccount {
  provider: string;
  type: string;
  providerAccountId: string;
  scope: string;
  access_token: string;
  expires_at: number;
  ext_expires_in: number;
  session_state: string;
}

interface AzureADUser {
  id: string;
  name: string;
  email: string;
  image: string;
}

interface AzureJWT extends DefaultJWT {
  uid: string;
  accessToken: string;
}

declare module "next-auth" {
  interface Account extends AzureADAccount {}

  interface User extends DefaultSession["user"] {
    id: string;
  }

  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends AzureJWT {
    uid: string;
    accessToken: string;
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string;
    user: DefaultSession["user"] & {
      uid: string;
    };
  }
}
