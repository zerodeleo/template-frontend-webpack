import * as THREE from "three";
import { AMBIENT_LIGHT, DIRECTIONAL_LIGHT } from "../lights";
import { DIRECTIONAL_LIGHT_CAMERA_HELPER } from "../debug/helpers";
import { PLANE_MESH } from "../geometries";
export const SCENE = new THREE.Scene();

SCENE
  // Lights
  .add(AMBIENT_LIGHT)
  .add(DIRECTIONAL_LIGHT)
  // .add(POINT_LIGHT)
  // .add(HEMISPHERE_LIGHT)
  // .add(RECT_AREA_LIGHT)
  // .add(SPOTLIGHT)
  // .add(SPOTLIGHT.target)
  // Geometries
  .add(PLANE_MESH)
  // Particles
  // Helpers
  .add(DIRECTIONAL_LIGHT_CAMERA_HELPER);
