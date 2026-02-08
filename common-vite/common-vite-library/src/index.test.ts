import { describe, it, expect } from "vitest";
import { greet } from "./index";

describe("greet", () => {
  it("returns expected message", () => {
    expect(greet("World")).toBe("Hello, World!");
  });
});
