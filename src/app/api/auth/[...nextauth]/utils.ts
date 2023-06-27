import { getServerSession as _getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
import { authOptions } from "./route";

// Leo: This is needed to make sure the chain of callbacks is executed
function getServerSession() {
  return _getServerSession(authOptions);
}

export { getServerSession, useSession };
