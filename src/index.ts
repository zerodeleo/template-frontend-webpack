import './styles/style.css';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/img/zerodeleo.png');
const matcap = textureLoader.load('/textures/matcaps/matcap.jpeg');

const cubeTextureLoader = new THREE.CubeTextureLoader();
const environmentMapTexture = cubeTextureLoader.load([
  '/textures/environmentMaps/0/px.png',
  '/textures/environmentMaps/0/nx.png',
  '/textures/environmentMaps/0/py.png',
  '/textures/environmentMaps/0/ny.png',
  '/textures/environmentMaps/0/pz.png',
  '/textures/environmentMaps/0/nz.png'
]);

/**
 * Objects
 */
const sphere = new THREE.SphereGeometry(0.8);
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphereMesh = new THREE.Mesh(sphere, material);
sphereMesh.position.set(0, -4, -5);
scene.add(sphereMesh);

const cube = new THREE.BoxGeometry(3, 3, 3);
const env = new THREE.MeshStandardMaterial();
env.metalness = 1;
env.roughness = 0;
env.envMap = environmentMapTexture;
const cubeMesh = new THREE.Mesh(cube, env);
cubeMesh.position.set(0, 0, -5);
scene.add(cubeMesh);

/**
 * Text
 */
const fontStyle = {
  size: 0.8,
  height: 0.05,
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 0.03,
  bevelSize: 0.02,
  bevelOffset: 0,
  bevelSegments: 5
};
const fontLoader = new FontLoader();
fontLoader.load('/fonts/optimer_regular.typeface.json', (font) => {
  const txtMaterial = new THREE.MeshMatcapMaterial({ matcap });
  const txtGeometry = new TextGeometry('zerodeleo', { font, ...fontStyle });
  const txt = new THREE.Mesh(txtGeometry, txtMaterial);
  txt.position.set(0, 4, -5);
  txtGeometry.center();
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
 * Controls
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

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
export const DURATION = 1;
export const DELAY = 0;
export const SPEED = 0.3;

gsap.to(sphereMesh.rotation, {
  duration: DURATION,
  delay: DELAY,
  x: 1.9 * Math.PI,
  y: 1.5 * Math.PI
});

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const start = DURATION + DELAY;

  // Update Object
  if (elapsedTime > start) {
    cubeMesh.rotation.x = (elapsedTime - start) * SPEED;
    cubeMesh.rotation.y = (elapsedTime - start) * SPEED;
  }

  // Update controls
  controls.target.y = 2;
  controls.update();

  camera.lookAt(cubeMesh.position);
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

/**
 * Handle Fullscreen & Resize
 */
export const fullscreen = () => {
  canvas.requestFullscreen && canvas.requestFullscreen();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const can = canvas as any;
  can.webkitRequestFullscreen && can.webkitRequestFullscreen();
  can.mozRequestFullscreen && can.mozRequestFullscreen();
  can.msRequestFullscreen && can.msRequestFullscreen();
};

export const exitFullscreen = () => {
  document.exitFullscreen && document.exitFullscreen();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = document as any;
  doc.webkitExitFullscreen && doc.webkitExitFullscreen();
  doc.mozExitFullscreen && doc.mozExitFullscreen();
  doc.msExitFullscreen && doc.msExitFullscreen();
};

window.addEventListener('dblclick', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = document as any;
  const fullscreenElement =
    document.fullscreenElement || doc.webkitFullscreenElement;

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
