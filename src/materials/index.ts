import * as THREE from "three";
import {
  TEXTURE_CONCRETE,
  TEXTURE_CONCRETE_AO,
  TEXTURE_CONCRETE_DISPLACEMENT,
  TEXTURE_CONCRETE_NORMAL,
  TEXTURE_CONCRETE_ROUGH,
  TEXTURE_ENV,
} from "../textures";

/**
 * ENVIRONMENT MAP
 *
 * HDRI to CubeMap
 * https://matheowis.github.io/HDRI-to-CubeMap/
 *
 * HDRI Library
 * https://polyhaven.com/
 */

export const MATERIAL_CONCRETE = new THREE.MeshStandardMaterial({
  metalness: 0.3,
  roughness: 1,
  map: TEXTURE_CONCRETE,
  aoMap: TEXTURE_CONCRETE_AO,
  aoMapIntensity: 1,
  displacementMap: TEXTURE_CONCRETE_DISPLACEMENT,
  roughnessMap: TEXTURE_CONCRETE_ROUGH,
  normalMap: TEXTURE_CONCRETE_NORMAL,
  normalScale: new THREE.Vector2(2, 2),
});

export const MATERIAL_PLASTIC = new THREE.MeshStandardMaterial({
  metalness: 1,
  roughness: 0.2,
  envMap: TEXTURE_ENV,
});
