import { createAuth } from "@keystone-6/auth";
import { statelessSessions } from "@keystone-6/core/session";

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  sessionData: "name email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

const session = statelessSessions({
  secret: process.env.SESSION_SECRET || "openpages-cms-dev-secret-change-me-32chars",
});

export { withAuth, session };
