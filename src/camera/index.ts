import * as THREE from "three";
import { SCENE, SCENE_LOGO } from "../scene";
import { ASPECT_RATIO } from "../util";

export const CAMERA = new THREE.PerspectiveCamera(90, ASPECT_RATIO);
CAMERA.position.set(0, 0, 10);

SCENE.add(CAMERA);

export const CAMERA_LOGO = new THREE.PerspectiveCamera(60, 1);
CAMERA_LOGO.position.set(0, 0, 3);
SCENE_LOGO.add(CAMERA_LOGO);
