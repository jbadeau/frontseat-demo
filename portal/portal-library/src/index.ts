import { getAccountSummary } from "@gotham-financial/gotham-vite-commons";

export const VERSION = "1.0.0";

export function getPortalDashboard(name: string): string {
  return `=== Gotham Financial Portal === ${getAccountSummary(name)} ===`;
}
