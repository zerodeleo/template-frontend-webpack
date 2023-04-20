import * as THREE from "three";
import {
  PARTICLES_MATERIAL,
  VM_PARTICLES_MATERIAL,
  WAVE_PARTICLES_MATERIAL,
} from "../materials";
import { PARTICLES_GEOMETRY, VM_GEOMETRY, WAVE_GEOMETRY } from "../geometries";

export const PARTICLES = new THREE.Points(
  PARTICLES_GEOMETRY,
  PARTICLES_MATERIAL
);

export const VM_PARTICLES = new THREE.Points(
  VM_GEOMETRY,
  VM_PARTICLES_MATERIAL
);

VM_PARTICLES.position.x = -20;

export const WAVE_PARTICLES = new THREE.Points(
  WAVE_GEOMETRY,
  WAVE_PARTICLES_MATERIAL
);
WAVE_PARTICLES.position.y = -10;
