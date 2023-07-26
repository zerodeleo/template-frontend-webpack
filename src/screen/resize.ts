import { WINDOW_SIZE } from "../utils";
import { CAMERA } from "../cameras";
import { RENDERER } from "../renderers";

export const resize = () => {
  // Update size
  WINDOW_SIZE.width = window.innerWidth;
  WINDOW_SIZE.height = window.innerHeight;

  // Update CAMERA
  CAMERA.aspect = WINDOW_SIZE.width / WINDOW_SIZE.height;
  CAMERA.updateProjectionMatrix();

  // Update RENDERER
  RENDERER.setSize(WINDOW_SIZE.width, WINDOW_SIZE.height);
  RENDERER.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};
