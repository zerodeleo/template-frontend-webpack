import * as THREE from "three";
import {
  COLOR_BLUE,
  COLOR_DARK_PURPLE,
  COLOR_ORANGE,
  COLOR_PINK,
  COLOR_WHITE,
} from "../colors";
import { SPHERE_MESH_2 } from "../geometries";

export const AMBIENT_LIGHT = new THREE.AmbientLight(COLOR_WHITE, 0.5);
export const HEMISPHERE_LIGHT = new THREE.HemisphereLight(
  COLOR_PINK,
  COLOR_BLUE,
  0.5
);

export const POINT_LIGHT = new THREE.PointLight(COLOR_ORANGE, 0.5);
POINT_LIGHT.position.x = -6;
POINT_LIGHT.position.y = -10;
POINT_LIGHT.position.z = -14;

export const DIRECTIONAL_LIGHT = new THREE.DirectionalLight(COLOR_WHITE, 0.5);
DIRECTIONAL_LIGHT.position.x = 1;
DIRECTIONAL_LIGHT.position.set(-0.5, 2, 2);
DIRECTIONAL_LIGHT.shadow.camera.near = 1;
DIRECTIONAL_LIGHT.shadow.camera.far = 25;
DIRECTIONAL_LIGHT.shadow.camera.top = 3;
DIRECTIONAL_LIGHT.shadow.camera.right = 3;
DIRECTIONAL_LIGHT.shadow.camera.bottom = -3;
DIRECTIONAL_LIGHT.shadow.camera.left = -3;
DIRECTIONAL_LIGHT.shadow.radius = 20;

export const RECT_AREA_LIGHT = new THREE.RectAreaLight(COLOR_BLUE, 2, 10, 10);
RECT_AREA_LIGHT.position.y = -5;

export const SPOTLIGHT = new THREE.SpotLight(
  COLOR_WHITE,
  0.4,
  100,
  Math.PI * 0.3
);
SPOTLIGHT.position.set(2, -4, -2);
SPOTLIGHT.target = SPHERE_MESH_2;
SPOTLIGHT.shadow.camera.fov = 20;
SPOTLIGHT.shadow.camera.near = 5;
SPOTLIGHT.shadow.camera.far = 20;
