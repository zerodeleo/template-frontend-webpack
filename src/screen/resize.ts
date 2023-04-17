import { WINDOW_SIZE } from "../util";
import { CAMERA } from "../camera";
import { RENDERER } from "../renderer";

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
