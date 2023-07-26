import * as THREE from "three";
import { DIRECTIONAL_LIGHT } from "../lights";

export const DIRECTIONAL_LIGHT_CAMERA_HELPER = new THREE.CameraHelper(
  DIRECTIONAL_LIGHT.shadow.camera
);

type Helpers = { directionalLight: boolean };
export const showHelpers = ({ directionalLight }: Helpers) => {
  DIRECTIONAL_LIGHT_CAMERA_HELPER.visible = directionalLight;
};
