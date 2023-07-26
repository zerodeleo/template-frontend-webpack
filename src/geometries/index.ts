import * as THREE from "three";
import CANNON from "cannon";
import { MATERIAL_CONCRETE, MATERIAL_PLASTIC } from "../materials";
import { SCENE } from "../scenes";
import { PHYSICS_DEFAULT as PHYSICS_MATERIAL_DEFAULT } from "../physics/materials";
import { ExtendedBufferAttributeInterface } from "../interfaces";

type Update = { mesh: THREE.Mesh; body: CANNON.Body };
export const GEOMETRIES_UPDATE: Update[] = [];

const PLANE_GEOMETRY = new THREE.PlaneGeometry(50, 50);
export const PLANE_MESH = new THREE.Mesh(PLANE_GEOMETRY, MATERIAL_CONCRETE);
PLANE_MESH.rotation.x = -Math.PI * 0.5;
PLANE_MESH.position.y = 0;
const PLANE_UV = (
  PLANE_MESH.geometry.attributes.uv as ExtendedBufferAttributeInterface
).array;
PLANE_MESH.geometry.setAttribute("uv2", new THREE.BufferAttribute(PLANE_UV, 2));

type CreateSphere = { radius: number; position: THREE.Vector3 };

export const createSphere = ({ radius, position }: CreateSphere) => {
  const { x, y, z } = position;
  const geo = new THREE.SphereGeometry(radius);
  const mesh = new THREE.Mesh(geo, MATERIAL_PLASTIC);
  mesh.castShadow = true;
  mesh.position.copy(position);
  SCENE.add(mesh);

  // Physics
  const shape = new CANNON.Sphere(radius);
  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(x, y, z),
    shape,
    material: PHYSICS_MATERIAL_DEFAULT,
  });
  body.position.copy(new CANNON.Vec3(x, y, z));

  GEOMETRIES_UPDATE.push({ mesh, body });
};
