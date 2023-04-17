import "./styles/style.css";
import { RENDERER } from "./renderer";
import { SCENE } from "./scene";
import { CAMERA } from "./camera";
import { listen } from "./listeners";
import { tick } from "./animations";
import { debug } from "./debug/gui";
import { shadow } from "./shadows";
import { showHelpers } from "./debug/helpers";

shadow({ softShadowMap: true });
listen();
tick();
debug();
showHelpers({ directionalLight: false, spotlight: true });

RENDERER.render(SCENE, CAMERA);
