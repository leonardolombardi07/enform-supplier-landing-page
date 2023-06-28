"use client";

import { Subscription } from "@/types";
import { Message, Segment } from "semantic-ui-react";
import { PageProps } from "../../page";

interface ClientViewProps extends PageProps {
  subscription: Subscription | null;
}

export default function ClientView({
  subscription,
  ...pageProps
}: ClientViewProps) {
  return (
    <main style={{ padding: "1em" }}>
      <Segment>
        <Message success>
          <Message.Header>Success!</Message.Header>

          <p>
            Your subscription was created. In less than a week {"we'll"} be
            contacting you to activate your subscription and enable the use of
            our product.
          </p>
        </Message>

        {subscription ? (
          <SubscriptionView subscription={subscription} />
        ) : (
          <Message error>
            <Message.Header>But some error happened....</Message.Header>
            <p>
              We {`couldn't`} show the data of your subscription on this page.{" "}
              {`Don't`} worry, we still have the data and will contact you soon!
            </p>
          </Message>
        )}

        {process.env.NODE_ENV === "development" && (
          <Segment>
            <h3>Debug</h3>
            <pre>
              <code>{JSON.stringify(pageProps, null, 2)}</code>
            </pre>
          </Segment>
        )}
      </Segment>
    </main>
  );
}

interface SubscriptionViewProps {
  subscription: Subscription;
}

function SubscriptionView({ subscription }: SubscriptionViewProps) {
  return (
    <Segment>
      <h1>Subscription</h1>
      <pre>
        <code>{JSON.stringify(subscription, null, 2)}</code>
      </pre>
    </Segment>
  );
}
