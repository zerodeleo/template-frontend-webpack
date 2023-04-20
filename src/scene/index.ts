import * as THREE from "three";
import {
  AMBIENT_LIGHT,
  DIRECTIONAL_LIGHT,
  HEMISPHERE_LIGHT,
  POINT_LIGHT,
  RECT_AREA_LIGHT,
  SPOTLIGHT,
} from "../lights";
import {
  PLANE_MESH,
  TORUS_KNOT_MESH,
  TORUS_KNOT_MESH_2,
  SPHERE_MESH_2,
  TORUS_MESH_3,
  TORUS_MESH_2,
  TORUS_MESH,
  CUBE_MESH,
  SPHERE_MESH,
} from "../geometries";
import {
  DIRECTIONAL_LIGHT_CAMERA_HELPER,
  SPOTLIGHT_CAMERA_HELPER,
} from "../debug/helpers";
import { PARTICLES, VM_PARTICLES, WAVE_PARTICLES } from "../points";

export const SCENE = new THREE.Scene();

SCENE
  // Lights
  .add(AMBIENT_LIGHT)
  .add(DIRECTIONAL_LIGHT)
  .add(POINT_LIGHT)
  .add(HEMISPHERE_LIGHT)
  .add(RECT_AREA_LIGHT)
  .add(SPOTLIGHT)
  .add(SPOTLIGHT.target)
  // Geometries
  .add(SPHERE_MESH_2)
  .add(PLANE_MESH)
  .add(TORUS_KNOT_MESH_2)
  .add(TORUS_KNOT_MESH_2)
  .add(TORUS_MESH_3)
  .add(TORUS_MESH_2)
  .add(TORUS_MESH)
  .add(CUBE_MESH)
  .add(SPHERE_MESH)
  // Particles
  .add(VM_PARTICLES)
  .add(WAVE_PARTICLES)
  // Helpers
  .add(DIRECTIONAL_LIGHT_CAMERA_HELPER)
  .add(SPOTLIGHT_CAMERA_HELPER);

export const SCENE_LOGO = new THREE.Scene();
SCENE_LOGO.add(PARTICLES);
