export const VERSION = "0.2.0";

export function auditTransaction(transactionId: string): string {
  return `Audit report for GCB-${transactionId} — Reviewed by Alfred Pennyworth, Chief Compliance Officer`;
}
