import * as THREE from "three";
import { ENV_TEXTURE } from "../textures";
import { FACE_TEXTURE } from "../textures";
import { COLOR_DARK_PURPLE, COLOR_PINK, COLOR_WHITE } from "../colors";

export const ENV_MATERIAL = new THREE.MeshStandardMaterial();
ENV_MATERIAL.metalness = 1;
ENV_MATERIAL.roughness = 0;
ENV_MATERIAL.envMap = ENV_TEXTURE;

export const FACE_MATERIAL = new THREE.MeshBasicMaterial({
  map: FACE_TEXTURE,
});

export const NORMAL_MATERIAL = new THREE.MeshNormalMaterial();

export const TRANSPARENT_MATERIAL = new THREE.MeshBasicMaterial();
TRANSPARENT_MATERIAL.color = COLOR_PINK;
TRANSPARENT_MATERIAL.transparent = true;
TRANSPARENT_MATERIAL.opacity = 0.8;

export const WIREFRAME_MATERIAL = new THREE.MeshBasicMaterial();
WIREFRAME_MATERIAL.color = COLOR_DARK_PURPLE;
WIREFRAME_MATERIAL.wireframe = true;

export const LAMBERT_MATERIAL = new THREE.MeshLambertMaterial();

export const PHONG_MATERIAL = new THREE.MeshPhongMaterial();
PHONG_MATERIAL.shininess = 100;
PHONG_MATERIAL.specular = COLOR_DARK_PURPLE;

export const TOON_MATERIAL = new THREE.MeshToonMaterial();

export const PINK_MATERIAL = new THREE.MeshStandardMaterial({
  color: COLOR_PINK,
});
PINK_MATERIAL.roughness = 0.4;

export const WHITE_MATERIAL = new THREE.MeshStandardMaterial({
  color: COLOR_WHITE,
});
WHITE_MATERIAL.roughness = 0.4;
