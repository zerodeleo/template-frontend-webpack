export interface Spin {
  mesh: THREE.Mesh;
  duration?: number;
  delay?: number;
  y?: boolean;
  x?: boolean;
  z?: boolean;
  degrees?: number;
}

const spin = ({ mesh, duration, delay, y, x, z }: Spin) => {
  gsap.to(mesh.rotation, {
    duration: duration ? duration : 1,
    delay: delay ? delay : 0,
    y: y ? mesh.rotation.y + Math.PI * 2 : 0,
    x: x ? mesh.rotation.x + Math.PI * 2 : 0,
    z: z ? mesh.rotation.z + Math.PI * 2 : 0
  });
};

export default spin;
