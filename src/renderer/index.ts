import * as THREE from "three";
import { CANVAS as canvas } from "../canvas";
import { WINDOW_SIZE } from "../util";

export const RENDERER = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});
RENDERER.setSize(WINDOW_SIZE.width, WINDOW_SIZE.height);
RENDERER.setPixelRatio(Math.min(window.devicePixelRatio, 2));
