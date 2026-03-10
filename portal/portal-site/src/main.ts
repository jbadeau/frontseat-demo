import { getPortalDashboard, VERSION } from "@gotham-financial/portal-library";

console.log(`portal-site using portal-library ${VERSION}`);
document.querySelector<HTMLHeadingElement>("#greeting")!.textContent =
  getPortalDashboard("Bruce Wayne");
