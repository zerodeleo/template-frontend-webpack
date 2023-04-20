import * as THREE from "three";
import { CANVAS as canvas, CANVAS_LOGO } from "../canvas";
import { WINDOW_SIZE } from "../util";

export const RENDERER_LOGO = new THREE.WebGLRenderer({
  canvas: CANVAS_LOGO,
  alpha: true,
});
RENDERER_LOGO.setSize(100, 100);
RENDERER_LOGO.setPixelRatio(Math.min(window.devicePixelRatio, 2));

export const RENDERER = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});
RENDERER.setSize(WINDOW_SIZE.width, WINDOW_SIZE.height);
RENDERER.setPixelRatio(Math.min(window.devicePixelRatio, 2));
