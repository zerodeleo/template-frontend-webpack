import * as THREE from "three";
import { SCENE } from "../scenes";
import { ASPECT_RATIO } from "../utils";

export const CAMERA = new THREE.PerspectiveCamera(60, ASPECT_RATIO);
CAMERA.position.set(20, 20, 20);

SCENE.add(CAMERA);
