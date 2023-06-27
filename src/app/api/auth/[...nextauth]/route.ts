import NextAuth, { AuthOptions } from "next-auth";
import AzureProvider from "next-auth/providers/azure-ad";

export const authOptions: AuthOptions = {
  providers: [
    AzureProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      console.log("JWT");
      console.log("token", token);
      console.log("account", account);
      console.log("user", user);

      const isAfterSignIn = Boolean(account);
      if (isAfterSignIn) {
        return {
          ...token,
          uid: user.id,
          accessToken: account?.access_token,
        };
      }

      return token;
    },

    async session({ session, token }) {
      console.log("SESSION");
      console.log("session", session);
      console.log("token", token);

      return {
        ...session,
        accessToken: token.accessToken,
        user: {
          ...session.user,
          uid: token.uid,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
