"use client";

import { Message, Segment } from "semantic-ui-react";

interface ClientViewProps {
  children: React.ReactNode;
}

export default function ClientView({ children }: ClientViewProps) {
  return (
    <main>
      <Segment>
        <Message success>
          <Message.Header>Success!</Message.Header>

          <p>
            Your subscription was created. In less than a week {"we'll"} be
            contacting you to activate your subscription and enable the use of
            our product.
          </p>
        </Message>

        {children}
      </Segment>
    </main>
  );
}
