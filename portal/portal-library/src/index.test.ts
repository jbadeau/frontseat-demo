import { describe, it, expect } from "vitest";
import { getPortalDashboard } from "./index";

describe("getPortalDashboard", () => {
  it("returns decorated banking dashboard message", () => {
    expect(getPortalDashboard("Bruce Wayne")).toBe(
      "=== Gotham Financial Portal === Welcome back, Bruce Wayne. Your Gotham Financial portfolio is valued at $1.2B ==="
    );
  });
});
