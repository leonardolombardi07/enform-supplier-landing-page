"use client";

import { Message, Segment } from "semantic-ui-react";

interface ClientViewProps {
  children: React.ReactNode;
}

export default function ClientView({ children }: ClientViewProps) {
  return (
    <main style={{ padding: "1em" }}>
      <Segment>
        <Message info>
          <Message.Header>Wooops!</Message.Header>
          <p>
            We {"don't"} have a subscription page yet. Please go to the
            subscription page on your marketplace account.
          </p>
        </Message>

        {children}
      </Segment>
    </main>
  );
}
