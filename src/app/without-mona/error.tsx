"use client";

import { Message, Button } from "semantic-ui-react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main>
      <Message error>
        <Message.Header>Algum erro ocorreu</Message.Header>
        <p>
          {error?.message
            ? ` A mensagem de erro é: ${error.message}`
            : "Não reconhecemos o erro"}
        </p>

        <Button onClick={reset}>Tentar novamente</Button>
      </Message>
    </main>
  );
}
