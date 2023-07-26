import { CAMERA } from "../cameras";
import { CANVAS } from "../canvas";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const CONTROLS = new OrbitControls(CAMERA, CANVAS);
CONTROLS.enableDamping = true;
