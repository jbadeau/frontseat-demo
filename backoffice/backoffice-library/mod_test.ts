import { assertEquals } from "std/assert/assert_equals.ts";
import { complianceReview } from "./mod.ts";

Deno.test("complianceReview returns decorated audit report", () => {
  assertEquals(
    complianceReview("5678"),
    "[COMPLIANCE] Audit report for GCB-5678 — Reviewed by Alfred Pennyworth, Chief Compliance Officer",
  );
});
