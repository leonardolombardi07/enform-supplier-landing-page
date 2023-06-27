"use client";

import { signIn, useSession } from "next-auth/react";
import React from "react";
import useSpinDelay from "@/libraries/hooks/useSpinDelay";
import { Segment, Placeholder } from "semantic-ui-react";

function RedirectIfNotAuthenticated({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const showSplashScreen = useSpinDelay(status === "loading");

  React.useEffect(() => {
    if (status === "unauthenticated") {
      // Leo: Directly signing in with Azure AD causes unexpected errors on signout
      // Since we are not signing out, I'm ignoring this
      signIn("azure-ad");
    }
  }, [status]);

  if (showSplashScreen) {
    return <SplashScreen />;
  }

  if (status !== "authenticated") {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

function SplashScreen() {
  return (
    <Segment loading>
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </Segment>
  );
}

export default RedirectIfNotAuthenticated;
