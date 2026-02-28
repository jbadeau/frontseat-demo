import { greet } from "@common-deno-library/mod.ts";

export const VERSION = "0.2.0";

export function fancyGreet(name: string): string {
  return `*** ${greet(name)} ***`;
}
