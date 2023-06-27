"use client";

import { LandingPageData } from "@/app/page";
import { Segment } from "semantic-ui-react";

interface HomeClientProps extends LandingPageData {}

export default function HomeClient({ properties, user }: HomeClientProps) {
  return (
    <main>
      <h1>HomeClient</h1>
      <Segment></Segment>
    </main>
  );
}
