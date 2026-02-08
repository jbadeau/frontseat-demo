import { assertEquals } from "std/assert/assert_equals.ts";
import { fancyGreet } from "./mod.ts";

Deno.test("fancyGreet returns decorated message", () => {
  assertEquals(fancyGreet("World"), "*** Hello, World! ***");
});
