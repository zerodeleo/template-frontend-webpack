import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { SCENE } from "../scene";
import { MATCAP as matcap } from "../textures";

const FONT_STYLE = {
  size: 0.8,
  height: 0.05,
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 0.03,
  bevelSize: 0.02,
  bevelOffset: 0,
  bevelSegments: 5,
};

const FONT_LOADER = new FontLoader();
FONT_LOADER.load("/fonts/optimer_regular.typeface.json", (font) => {
  const TEXT_MATERIAL = new THREE.MeshMatcapMaterial({ matcap });
  const TEXT_GEOMETRY = new TextGeometry("zerodeleo", { font, ...FONT_STYLE });
  const TEXT_MESH = new THREE.Mesh(TEXT_GEOMETRY, TEXT_MATERIAL);
  TEXT_MESH.position.set(0, 4, -5);
  TEXT_GEOMETRY.center();
  SCENE.add(TEXT_MESH);
});
