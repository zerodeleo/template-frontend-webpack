import * as THREE from "three";
import { COLOR_WHITE } from "../colors";

export const AMBIENT_LIGHT = new THREE.AmbientLight(COLOR_WHITE, 0.5);

export const DIRECTIONAL_LIGHT = new THREE.DirectionalLight(COLOR_WHITE, 0.5);
DIRECTIONAL_LIGHT.position.x = 1;
DIRECTIONAL_LIGHT.position.set(-0.5, 2, 2);
DIRECTIONAL_LIGHT.shadow.camera.near = 1;
DIRECTIONAL_LIGHT.shadow.camera.far = 25;
DIRECTIONAL_LIGHT.shadow.camera.top = 12;
DIRECTIONAL_LIGHT.shadow.camera.right = 12;
DIRECTIONAL_LIGHT.shadow.camera.bottom = -12;
DIRECTIONAL_LIGHT.shadow.camera.left = -12;
DIRECTIONAL_LIGHT.shadow.radius = 20;
