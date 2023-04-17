import * as THREE from "three";
import { PLANE_MESH, SPHERE_MESH_2 } from "../geometries";
import { DIRECTIONAL_LIGHT, POINT_LIGHT, SPOTLIGHT } from "../lights";
import { RENDERER } from "../renderer";

type Shadow = { softShadowMap: boolean };

export const shadow = ({ softShadowMap }: Shadow) => {
  RENDERER.shadowMap.enabled = true;

  // MESHES
  SPHERE_MESH_2.castShadow = true;
  PLANE_MESH.receiveShadow = true;

  /** LIGHTS
   * Only the following types of lights support shadows: PointLight DirectionalLight SpotLight
   */
  DIRECTIONAL_LIGHT.castShadow = true;
  DIRECTIONAL_LIGHT.shadow.mapSize.width = 1024;
  DIRECTIONAL_LIGHT.shadow.mapSize.height = 1024;

  SPOTLIGHT.castShadow = true;
  SPOTLIGHT.shadow.mapSize.width = 1024;
  SPOTLIGHT.shadow.mapSize.height = 1024;

  if (softShadowMap) {
    RENDERER.shadowMap.type = THREE.PCFSoftShadowMap;
  }
};
