import "./styles/style.css";
import { RENDERER } from "./renderers";
import { SCENE } from "./scenes";
import { CAMERA } from "./cameras";
import { listen } from "./listeners";
import { tick } from "./animations";
import { debug } from "./debug/gui";
import { shadow } from "./shadows";
import { showHelpers } from "./debug/helpers";

shadow({ softShadowMap: true });
listen();
tick();
debug();
showHelpers({ directionalLight: false });

RENDERER.render(SCENE, CAMERA);
