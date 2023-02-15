export type Spin = {
  mesh: THREE.Mesh;
  duration: number;
  delay: number;
  y: boolean;
  x: boolean;
  z: boolean;
  degrees: number;
};

export const spin = ({ mesh, duration, delay, y, x, z }: Spin) =>
  gsap.to(mesh.rotation, {
    duration,
    delay,
    y: y ? mesh.rotation.y + Math.PI * 2 : 0,
    x: x ? mesh.rotation.y + Math.PI * 2 : 0,
    z: z ? mesh.rotation.y + Math.PI * 2 : 0
  });
