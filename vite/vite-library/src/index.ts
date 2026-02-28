import { greet } from "@frontseat-demo/common-vite-library";

export const VERSION = "0.2.0";

export function fancyGreet(name: string): string {
  return `*** ${greet(name)} ***`;
}
