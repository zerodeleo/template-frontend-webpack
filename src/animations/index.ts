import * as THREE from "three";
import { SCENE, SCENE_LOGO } from "../scene";
import { CAMERA, CAMERA_LOGO } from "../camera";
import { RENDERER, RENDERER_LOGO } from "../renderer";
import {
  SPHERE_MESH,
  CUBE_MESH,
  WAVE_GEOMETRY,
  WAVE_PARTICLES_COUNT,
} from "../geometries";
import gsap from "gsap";
import { CONTROLS } from "../controls";
import { PARTICLES } from "../points";
import { ExtendedBufferAttributeInterface } from "../interface";

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

    PARTICLES.rotation.x = (elapsedTime - start) * 0.2;
    PARTICLES.rotation.y = (elapsedTime - start) * 0.2;
    PARTICLES.rotation.z = (elapsedTime - start) * 0.2;
  }

  for (let i = 0; i < WAVE_PARTICLES_COUNT; i++) {
    const i3 = i * 3;

    const x = (
      WAVE_GEOMETRY.attributes.position as ExtendedBufferAttributeInterface
    ).array[i3];
    (
      WAVE_GEOMETRY.attributes.position as ExtendedBufferAttributeInterface
    ).array[i3 + 1] = Math.sin(elapsedTime + x);
  }
  WAVE_GEOMETRY.attributes.position.needsUpdate = true;

  // Update controls
  CONTROLS.update();

  // CAMERA.lookAt(CUBE_MESH.position);
  RENDERER.render(SCENE, CAMERA);
  RENDERER_LOGO.render(SCENE_LOGO, CAMERA_LOGO);
  window.requestAnimationFrame(tick);
};
