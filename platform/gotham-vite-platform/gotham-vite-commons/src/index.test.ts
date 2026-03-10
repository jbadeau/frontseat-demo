import { describe, it, expect } from "vitest";
import { getAccountSummary } from "./index";

describe("getAccountSummary", () => {
  it("returns expected account summary message", () => {
    expect(getAccountSummary("Bruce Wayne")).toBe(
      "Welcome back, Bruce Wayne. Your Gotham Financial portfolio is valued at $1.2B"
    );
  });
});
