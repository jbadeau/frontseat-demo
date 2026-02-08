import { greet } from "@frontseat-demo/common-vite-library";

export function fancyGreet(name: string): string {
  return `*** ${greet(name)} ***`;
}
