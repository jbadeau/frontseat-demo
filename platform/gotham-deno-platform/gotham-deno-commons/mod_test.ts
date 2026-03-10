import { assertEquals } from "std/assert/assert_equals.ts";
import { auditTransaction } from "./mod.ts";

Deno.test("auditTransaction returns expected audit report", () => {
  assertEquals(
    auditTransaction("1234"),
    "Audit report for GCB-1234 — Reviewed by Alfred Pennyworth, Chief Compliance Officer",
  );
});
