import * as dat from 'lil-gui';
import { CUBE_MESH, TORUS_KNOT_MESH } from '../geometries';
import { NORMAL_MATERIAL } from '../materials';
import {
  AMBIENT_LIGHT,
  DIRECTIONAL_LIGHT,
  HEMISPHERE_LIGHT,
  POINT_LIGHT,
  RECT_AREA_LIGHT,
  SPOTLIGHT,
} from '../lights';

export const debug = () => {
  const gui = new dat.GUI();
  gui.close();

  const LIGHT_FOLDER = gui.addFolder('Light');
  LIGHT_FOLDER.add(AMBIENT_LIGHT, 'visible').name('Ambient');
  LIGHT_FOLDER.add(DIRECTIONAL_LIGHT, 'visible').name('Directional');
  LIGHT_FOLDER.add(POINT_LIGHT, 'visible').name('Point');
  LIGHT_FOLDER.add(HEMISPHERE_LIGHT, 'visible').name('Hemisphere');
  LIGHT_FOLDER.add(RECT_AREA_LIGHT, 'visible').name('Rect Area');
  LIGHT_FOLDER.add(SPOTLIGHT, 'visible').name('Spotlight');

  const CUBE_FOLDER = gui.addFolder('Cube');
  CUBE_FOLDER.add(CUBE_MESH, 'visible');
  CUBE_FOLDER.add(CUBE_MESH.position, 'x', -10, 10, 0.1);
  CUBE_FOLDER.add(CUBE_MESH.position, 'y', -10, 10, 0.1);
  CUBE_FOLDER.add(CUBE_MESH.position, 'z', -10, 10, 0.1);
  CUBE_FOLDER.close();

  const TORUS_KNOT_FOLDER = gui.addFolder('Torus Knot');
  TORUS_KNOT_FOLDER.add(TORUS_KNOT_MESH, 'visible');
  TORUS_KNOT_FOLDER.close();

  const NORMAL_MATERIAL_FOLDER = gui.addFolder('Normal Material');
  NORMAL_MATERIAL_FOLDER.add(NORMAL_MATERIAL, 'wireframe');
  NORMAL_MATERIAL_FOLDER.close();

  const AMBIENT_LIGHT_FOLDER = gui.addFolder('Ambient Light');
  AMBIENT_LIGHT_FOLDER.add(AMBIENT_LIGHT, 'visible');
  AMBIENT_LIGHT_FOLDER.add(AMBIENT_LIGHT, 'intensity')
    .min(0)
    .max(1)
    .step(0.001);
  AMBIENT_LIGHT_FOLDER.addColor(AMBIENT_LIGHT, 'color');
  AMBIENT_LIGHT_FOLDER.close();

  const DIRECTIONAL_LIGHT_FOLDER = gui.addFolder('Directional Light');
  DIRECTIONAL_LIGHT_FOLDER.add(DIRECTIONAL_LIGHT, 'visible');
  DIRECTIONAL_LIGHT_FOLDER.add(DIRECTIONAL_LIGHT.position, 'x', -10, 10, 0.001);
  DIRECTIONAL_LIGHT_FOLDER.add(DIRECTIONAL_LIGHT.position, 'y', -10, 10, 0.001);
  DIRECTIONAL_LIGHT_FOLDER.add(DIRECTIONAL_LIGHT.position, 'z', -10, 10, 0.001);
  DIRECTIONAL_LIGHT_FOLDER.close();

  const POINT_LIGHT_FOLDER = gui.addFolder('Point Light');
  POINT_LIGHT_FOLDER.add(POINT_LIGHT, 'visible');
  POINT_LIGHT_FOLDER.add(POINT_LIGHT.position, 'x', -100, 10, 0.001);
  POINT_LIGHT_FOLDER.add(POINT_LIGHT.position, 'y', -100, 10, 0.001);
  POINT_LIGHT_FOLDER.add(POINT_LIGHT.position, 'z', -100, 10, 0.001);
  POINT_LIGHT_FOLDER.close();

  const HEMISPHERE_LIGHT_FOLDER = gui.addFolder('Hemisphere Light');
  HEMISPHERE_LIGHT_FOLDER.add(POINT_LIGHT.position, 'x', -100, 10, 0.001);
  HEMISPHERE_LIGHT_FOLDER.add(POINT_LIGHT.position, 'y', -100, 10, 0.001);
  HEMISPHERE_LIGHT_FOLDER.add(POINT_LIGHT.position, 'z', -100, 10, 0.001);
  HEMISPHERE_LIGHT_FOLDER.close();

  const SPOTLIGHT_FOLDER = gui.addFolder('Spotlight');
  SPOTLIGHT_FOLDER.add(SPOTLIGHT.position, 'x', -100, 10, 0.001);
  SPOTLIGHT_FOLDER.add(SPOTLIGHT.position, 'y', -100, 10, 0.001);
  SPOTLIGHT_FOLDER.add(SPOTLIGHT.position, 'z', -100, 10, 0.001);
  SPOTLIGHT_FOLDER.close();
};
