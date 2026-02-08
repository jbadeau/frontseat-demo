import { fancyGreet } from "@frontseat-demo/vite-library";

document.querySelector<HTMLHeadingElement>("#greeting")!.textContent =
  fancyGreet("World");
