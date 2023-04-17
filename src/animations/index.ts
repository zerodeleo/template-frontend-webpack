import * as THREE from "three";
import { SCENE } from "../scene";
import { CAMERA } from "../camera";
import { RENDERER } from "../renderer";
import { SPHERE_MESH, CUBE_MESH } from "../geometries";
import gsap from "gsap";
import { CONTROLS } from "../controls";

const DURATION = 1;
const DELAY = 0;
const SPEED = 0.3;

const SPIN_PARAMS = {
  duration: DURATION,
  delay: DELAY,
  x: 1.9 * Math.PI,
  y: 1.5 * Math.PI,
};
gsap.to(SPHERE_MESH.rotation, SPIN_PARAMS);

const clock = new THREE.Clock();

export const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const start = DURATION + DELAY;

  // Update Object
  if (elapsedTime > start) {
    CUBE_MESH.rotation.x = (elapsedTime - start) * SPEED;
    CUBE_MESH.rotation.y = (elapsedTime - start) * SPEED;
  }

  // Update controls
  CONTROLS.update();

  // CAMERA.lookAt(CUBE_MESH.position);
  RENDERER.render(SCENE, CAMERA);
  window.requestAnimationFrame(tick);
};
