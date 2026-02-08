import { fancyGreet } from "@deno-library/mod.ts";

Deno.serve({ port: 8080 }, (req: Request) => {
  const url = new URL(req.url);
  if (url.pathname === "/greet") {
    const name = url.searchParams.get("name") ?? "World";
    return new Response(fancyGreet(name));
  }
  return new Response("Not Found", { status: 404 });
});
