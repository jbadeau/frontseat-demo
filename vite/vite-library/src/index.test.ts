import { describe, it, expect } from "vitest";
import { fancyGreet } from "./index";

describe("fancyGreet", () => {
  it("returns decorated message", () => {
    expect(fancyGreet("World")).toBe("*** Hello, World! ***");
  });
});
