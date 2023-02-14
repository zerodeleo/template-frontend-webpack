import './styles/style.css';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

/**
 * Canvas
 */
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const canvas: HTMLCanvasElement = document.querySelector('#canvas')!;

/**
 * Scene
 */
export const scene = new THREE.Scene();

/**
 * Texture
 */
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/img/zerodeleo.png');

/**
 * Object
 */
const cube = new THREE.BoxGeometry(4, 4);
const material = new THREE.MeshBasicMaterial({ map: texture });
const mesh = new THREE.Mesh(cube, material);
scene.add(mesh);

/**
 * Text
 */
const fontStyle = {
  size: 0.05,
  height: 0.001
};
const fontLoader = new FontLoader();
fontLoader.load('/fonts/', (font) => {
  const txtMaterial = new THREE.MeshBasicMaterial();
  const txtGeometry = new TextGeometry('zerodeleo', { font, ...fontStyle });
  const txt = new THREE.Mesh(txtGeometry, txtMaterial);
  txt.position.set(0, 5, 1);
  scene.add(txt);
});

/**
 * Camera
 */
export const windowSize = {
  width: window.innerWidth,
  height: window.innerHeight
};

export const aspectRatio = windowSize.width / windowSize.height;

export const camera = new THREE.PerspectiveCamera(90, aspectRatio);
camera.position.set(0, 0, 10);
scene.add(camera);

/**
 * Renderer
 */
export const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true
});
renderer.setSize(windowSize.width, windowSize.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animation
 */
const tick = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

/**
 * Handle Fullscreen & Resize
 */
export const fullscreen = () => {
  canvas.requestFullscreen && canvas.requestFullscreen();
  // TODO: canvas.webkitRequestFullscreen && canvas.webkitRequestFullscreen();
};

export const exitFullscreen = () => {
  document.exitFullscreen && document.exitFullscreen();
  // TODO: document.webkitExitFullscreen && document.webkitExitFullscreen();
};

window.addEventListener('dblclick', () => {
  const fullscreenElement = document.fullscreenElement; // TODO: || document.webkitFullscreenElement;

  fullscreenElement ? exitFullscreen() : fullscreen();
});

// Handle resize
window.addEventListener('resize', () => {
  // Update size
  windowSize.width = window.innerWidth;
  windowSize.height = window.innerHeight;

  // Update camera
  camera.aspect = windowSize.width / windowSize.height;
  camera.updateProjectionMatrix();

  // Update Renderer
  renderer.setSize(windowSize.width, windowSize.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
