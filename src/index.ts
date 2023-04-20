import "./styles/style.css";
import { RENDERER, RENDERER_LOGO } from "./renderer";
import { SCENE, SCENE_LOGO } from "./scene";
import { CAMERA, CAMERA_LOGO } from "./camera";
import { listen } from "./listeners";
import { tick } from "./animations";
import { debug } from "./debug/gui";
import { shadow } from "./shadows";
import { showHelpers } from "./debug/helpers";

shadow({ softShadowMap: true });
listen();
tick();
debug();
showHelpers({ directionalLight: false, spotlight: false });

RENDERER_LOGO.render(SCENE_LOGO, CAMERA_LOGO);
RENDERER.render(SCENE, CAMERA);
