import { handleFullscreen } from "../screen/fullscreen";
import { resize } from "../screen/resize";

export const listen = () => {
  // Handle resize
  window.addEventListener("resize", () => {
    resize();
  });

  // Handle fullscreen
  window.addEventListener("dblclick", () => {
    handleFullscreen();
  });
};
