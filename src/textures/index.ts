import * as THREE from "three";

export const TEXTURE_LOADER = new THREE.TextureLoader();
export const TEXTURE_CONCRETE = TEXTURE_LOADER.load(
  "/textures/concrete/cracked_concrete_wall_diff_4k.jpg"
);
export const TEXTURE_CONCRETE_AO = TEXTURE_LOADER.load(
  "/textures/concrete/cracked_concrete_wall_ao_4k.jpg"
);
export const TEXTURE_CONCRETE_ROUGH = TEXTURE_LOADER.load(
  "/textures/concrete/cracked_concrete_wall_rough_4k.jpg"
);
export const TEXTURE_CONCRETE_DISPLACEMENT = TEXTURE_LOADER.load(
  "/textures/concrete/cracked_concrete_wall_disp_4k.jpg"
);
export const TEXTURE_CONCRETE_NORMAL = TEXTURE_LOADER.load(
  "/textures/concrete/cracked_concrete_wall_nor_gl_4k.jpg"
);

export const TEXTURE_LOADER_ENV = new THREE.CubeTextureLoader();
export const TEXTURE_ENV = TEXTURE_LOADER_ENV.load([
  "/textures/environmentMaps/1/px.png",
  "/textures/environmentMaps/1/nx.png",
  "/textures/environmentMaps/1/py.png",
  "/textures/environmentMaps/1/ny.png",
  "/textures/environmentMaps/1/pz.png",
  "/textures/environmentMaps/1/nz.png",
]);
