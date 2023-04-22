import * as THREE from 'three';
import { SCENE } from '../scene';
import {
  ENV_MATERIAL,
  FACE_MATERIAL,
  LAMBERT_MATERIAL,
  NORMAL_MATERIAL,
  PHONG_MATERIAL,
  PINK_MATERIAL,
  TOON_MATERIAL,
  TRANSPARENT_MATERIAL,
  WHITE_MATERIAL,
  WIREFRAME_MATERIAL,
} from '../materials';
import { COLOR_PINK } from '../colors';
import { ExtendedBufferAttributeInterface } from '../interface';

const SPHERE = new THREE.SphereGeometry(0.8);
export const SPHERE_MESH = new THREE.Mesh(SPHERE, FACE_MATERIAL);
SPHERE_MESH.position.set(0, -4, -5);

const CUBE = new THREE.BoxGeometry(3, 3, 3);
export const CUBE_MESH = new THREE.Mesh(CUBE, ENV_MATERIAL);
CUBE_MESH.position.set(0, 0, -5);

const TORUS = new THREE.TorusGeometry(2);
export const TORUS_MESH = new THREE.Mesh(TORUS, NORMAL_MATERIAL);
TORUS_MESH.position.set(-8, 0, -6);

export const TORUS_MESH_2 = new THREE.Mesh(TORUS, TRANSPARENT_MATERIAL);
TORUS_MESH_2.position.set(-8, 0, -5);

export const TORUS_MESH_3 = new THREE.Mesh(TORUS, WIREFRAME_MATERIAL);
TORUS_MESH_3.position.set(-8, 0, -4);

const TORUS_KNOT = new THREE.TorusKnotGeometry();

export const TORUS_KNOT_MESH = new THREE.Mesh(TORUS_KNOT, PHONG_MATERIAL);
TORUS_KNOT_MESH.position.set(-8, 5, -6);

export const TORUS_KNOT_MESH_2 = new THREE.Mesh(TORUS_KNOT, TOON_MATERIAL);
TORUS_KNOT_MESH_2.position.set(-8, 10, -6);

const PLANE = new THREE.PlaneGeometry(15, 15);
export const PLANE_MESH = new THREE.Mesh(PLANE, WHITE_MATERIAL);
PLANE_MESH.rotation.x = -Math.PI * 0.5;
PLANE_MESH.position.y = -12;
PLANE_MESH.position.z = -12;

const SPHERE_2 = new THREE.SphereGeometry(2);
export const SPHERE_MESH_2 = new THREE.Mesh(SPHERE_2, PINK_MATERIAL);
SPHERE_MESH_2.position.y = -10;
SPHERE_MESH_2.position.z = -10;

export const PARTICLES_GEOMETRY = new THREE.SphereGeometry(1, 64, 64);

/**
 * VM
 */
export const VM_GEOMETRY = new THREE.BufferGeometry();

export const WAVE_GEOMETRY = new THREE.BufferGeometry();

const createParticleCube = (geometry: THREE.BufferGeometry, count = 10) => {
  const positions = new Float32Array(count + 3);
  const colors = new Float32Array(count + 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
    colors[i] = Math.random();
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
};

export const VM_PARTICLES_COUNT = 5000;
createParticleCube(VM_GEOMETRY, VM_PARTICLES_COUNT);

export const WAVE_PARTICLES_COUNT = 50000;
createParticleCube(WAVE_GEOMETRY, WAVE_PARTICLES_COUNT);

const colors = (
  PARTICLES_GEOMETRY.attributes.position as ExtendedBufferAttributeInterface
).array;
PARTICLES_GEOMETRY.setAttribute('color', new THREE.BufferAttribute(colors, 3));

export const GALAXY_GEOMETRY = new THREE.BufferGeometry();
