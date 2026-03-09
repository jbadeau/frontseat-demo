import { auditTransaction } from "@gotham-deno-commons/mod.ts";

export const VERSION = "0.2.0";

export function complianceReview(transactionId: string): string {
  return `[COMPLIANCE] ${auditTransaction(transactionId)}`;
}
