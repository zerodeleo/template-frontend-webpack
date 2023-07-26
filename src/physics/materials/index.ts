import CANNON from "cannon";

export const PHYSICS_MATERIAL_CONCRETE = new CANNON.Material("concrete");
export const PHYSICS_MATERIAL_PLASTIC = new CANNON.Material("plastic");

export const PHYSICS_MATERIAL_CONCRETE_PLASTIC_CONTACT =
  new CANNON.ContactMaterial(
    PHYSICS_MATERIAL_CONCRETE,
    PHYSICS_MATERIAL_PLASTIC,
    { friction: 0.1, restitution: 0.2 }
  );

export const PHYSICS_DEFAULT = new CANNON.Material("default");
export const PHYSICS_DEFAULT_CONTACT = new CANNON.ContactMaterial(
  PHYSICS_DEFAULT,
  PHYSICS_DEFAULT,
  { friction: 0.1, restitution: 0.7 }
);
