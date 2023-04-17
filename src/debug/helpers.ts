import * as THREE from "three";
import { DIRECTIONAL_LIGHT, SPOTLIGHT } from "../lights";

export const DIRECTIONAL_LIGHT_CAMERA_HELPER = new THREE.CameraHelper(
  DIRECTIONAL_LIGHT.shadow.camera
);

export const SPOTLIGHT_CAMERA_HELPER = new THREE.CameraHelper(
  SPOTLIGHT.shadow.camera
);

type Helpers = { directionalLight: boolean; spotlight: boolean };
export const showHelpers = ({ directionalLight, spotlight }: Helpers) => {
  DIRECTIONAL_LIGHT_CAMERA_HELPER.visible = directionalLight;
  SPOTLIGHT_CAMERA_HELPER.visible = spotlight;
};
