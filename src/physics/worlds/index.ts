import CANNON from "cannon";
import { PLANE_BODY } from "../bodies";
import { PHYSICS_DEFAULT_CONTACT } from "../materials";

export const WORLD = new CANNON.World();
WORLD.gravity.set(0, -9.82, 0);

WORLD.addBody(PLANE_BODY);
WORLD.defaultContactMaterial = PHYSICS_DEFAULT_CONTACT;
