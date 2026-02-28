import { fancyGreet, VERSION } from "@frontseat-demo/vite-library";

console.log(`vite-site using vite-library ${VERSION}`);
document.querySelector<HTMLHeadingElement>("#greeting")!.textContent =
  fancyGreet("World");
