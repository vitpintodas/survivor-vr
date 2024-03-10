import { copyRotation } from "../utils/aframe";
import '../aframe/fire-ball-movement.js';

AFRAME.registerComponent("fire-ball", {
  schema: {
    speed: { type: "number", default: 5 },
  },

  init: function () {
    this.el.addEventListener("triggerdown", (evt) => {

      // création de la boule de feu
      const fireball = document.createElement("a-entity");
      fireball.setAttribute("geometry", "primitive: sphere; radius: 0.1");
      fireball.setAttribute("material", "src: #lave-texture");
      fireball.setAttribute(
        "physx-body",
        "type: kinematic; emitCollisionEvents: true;"
      );
      fireball.setAttribute(
        "physx-material",
        "collisionLayers: [2, 3]; collidesWithLayers: [1];"
      );
      fireball.setAttribute('id', 'fireball');
      fireball.setAttribute('fire-ball-movement', {});

      // position et rotation intiales
      const worldPos = new THREE.Vector3();
      const direction = new THREE.Vector3();
      this.el.object3D.getWorldPosition(worldPos);
      this.el.object3D.getWorldDirection(direction);
      fireball.setAttribute("position", worldPos);
      copyRotation(document.getElementById('fireball-thrower'), fireball);

      // ajout de boule de feu à la scène
      this.el.sceneEl.appendChild(fireball);

      setTimeout(() => {
        fireball.parentNode.removeChild(fireball);
      }, 3500);
    });
  },
});
