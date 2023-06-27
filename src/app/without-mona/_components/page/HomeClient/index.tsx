"use client";

import { LandingPageData } from "../../../page";
import { Segment } from "semantic-ui-react";

interface HomeClientProps extends LandingPageData {}

export default function HomeClient({ properties, user }: HomeClientProps) {
  return (
    <main>
      <h1>HomeClient</h1>
      <Segment>
        <h1>Properties</h1>
        <pre>
          <code>{JSON.stringify(properties, null, 2)}</code>
        </pre>

        <h1>User info</h1>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </Segment>
    </main>
  );
}
