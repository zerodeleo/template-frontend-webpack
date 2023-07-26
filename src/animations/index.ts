import * as THREE from "three";
import CANNON from "cannon";
import { SCENE } from "../scenes";
import { CAMERA } from "../cameras";
import { RENDERER } from "../renderers";
import { CONTROLS } from "../controls";
import { WORLD } from "../physics/worlds";
import { GEOMETRIES_UPDATE, createSphere } from "../geometries";

const clock = new THREE.Clock();
let oldElapsedTime = 0;

export const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - oldElapsedTime;
  oldElapsedTime = elapsedTime;

  // Update Objects
  const position = new THREE.Vector3(0, 10, 0);
  createSphere({ radius: 5, position });

  // Update physics
  WORLD.step(1 / 60, deltaTime, 3);

  // Update controls
  CONTROLS.update();

  // CAMERA.lookAt(CUBE_MESH.position);
  RENDERER.render(SCENE, CAMERA);
  window.requestAnimationFrame(tick);
};
