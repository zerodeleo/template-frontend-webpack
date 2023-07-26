import CANNON from "cannon";
import { PLANE_SHAPE } from "../shapes";
import { PLANE_MESH } from "../../geometries";

export const PLANE_BODY = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(0, PLANE_MESH.position.y, 0),
  shape: PLANE_SHAPE,
});
PLANE_BODY.quaternion.setFromAxisAngle(
  new CANNON.Vec3(-1, 0, 0),
  Math.PI * 0.5
);
