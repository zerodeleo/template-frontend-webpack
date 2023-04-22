import * as THREE from "three";
import { GALAXY_MATERIAL } from "../materials";
import { GALAXY_GEOMETRY } from "../geometries";
import { SCENE } from "../scene";
import { GALAXY_PARTICLES } from "../points";

const parameters = {
  count: 100000,
  size: 0.01,
  radius: 5,
  branches: 3,
  spin: 1,
  randomness: 0.2,
  randomnessPower: 3,
  insideColor: "#ff6030",
  outsideColor: "#1b3984",
};

const galaxyLogic = () => {
  const positions = new Float32Array(parameters.count * 3);
  const colors = new Float32Array(parameters.count * 3);

  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;

    const radius = Math.random() * parameters.radius;

    const spinAngle = radius * parameters.spin;
    const branchAngle =
      ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;

    positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius / parameters.radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  GALAXY_GEOMETRY.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

  GALAXY_GEOMETRY.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  GALAXY_GEOMETRY.setAttribute("color", new THREE.BufferAttribute(colors, 3));
};

export const generateGalaxy = () => {
  if (GALAXY_PARTICLES) {
    console.log("hello");
    GALAXY_GEOMETRY.dispose();
    GALAXY_MATERIAL.dispose();
    SCENE.remove(GALAXY_PARTICLES);
  }

  galaxyLogic();

  GALAXY_MATERIAL.size = parameters.size;

  SCENE.add(GALAXY_PARTICLES);
};

export const GALAXY_PARAMETERS = parameters;
