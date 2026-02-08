import { greet } from "@common-deno-library/mod.ts";

export function fancyGreet(name: string): string {
  return `*** ${greet(name)} ***`;
}
