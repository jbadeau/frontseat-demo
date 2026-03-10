import { complianceReview } from "@backoffice-library/mod.ts";

const VERSION = "0.2.0";

Deno.serve({ port: 8080 }, (req: Request) => {
  const url = new URL(req.url);
  if (url.pathname === "/version") {
    return new Response(VERSION);
  }
  if (url.pathname === "/compliance") {
    const transactionId = url.searchParams.get("transactionId") ?? "0000";
    return new Response(complianceReview(transactionId));
  }
  return new Response("Gotham Financial — Compliance Dashboard", {
    headers: { "content-type": "text/plain" },
  });
});
