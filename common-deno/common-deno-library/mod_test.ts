import { assertEquals } from "std/assert/assert_equals.ts";
import { greet } from "./mod.ts";

Deno.test("greet returns expected message", () => {
  assertEquals(greet("World"), "Hello, World!");
});
