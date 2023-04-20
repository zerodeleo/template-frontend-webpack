import * as THREE from "three";

export const TEXTURE_LOADER = new THREE.TextureLoader();
export const FACE_TEXTURE = TEXTURE_LOADER.load("/img/zerodeleo.png");
export const MATCAP = TEXTURE_LOADER.load("/textures/matcaps/matcap.jpeg");

export const ENV_TEXTURE_LOADER = new THREE.CubeTextureLoader();
export const ENV_TEXTURE = ENV_TEXTURE_LOADER.load([
  "/textures/environmentMaps/0/px.png",
  "/textures/environmentMaps/0/nx.png",
  "/textures/environmentMaps/0/py.png",
  "/textures/environmentMaps/0/ny.png",
  "/textures/environmentMaps/0/pz.png",
  "/textures/environmentMaps/0/nz.png",
]);

export const VM_PARTICLES_TEXTURE = TEXTURE_LOADER.load("/img/vmradio.png");
