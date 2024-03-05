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
      fireball.setAttribute("material", "src: #lava");
      fireball.setAttribute(
        "physx-body",
        "type: kinematic; emitCollisionEvents: true"
      );
      fireball.setAttribute('fire-ball-movement', {});

      // position et rotation intiales
      const worldPos = new THREE.Vector3();
      const direction = new THREE.Vector3();
      this.el.object3D.getWorldPosition(worldPos);
      this.el.object3D.getWorldDirection(direction);
      fireball.setAttribute("position", worldPos);
      // fireball.setAttribute("direction", direction);
      copyRotation(document.getElementById('fireball-thrower'), fireball);

      // this.normal = new THREE.Vector3();
      // this.el.object3D.getWorldDirection(this.normal);

      // ajout de boule de feu à la scène
      this.el.sceneEl.appendChild(fireball);

      // fireball.setAttribute("fireball-movement", `normal: ' + this.normal.x +);

      setTimeout(() => {
        fireball.parentNode.removeChild(fireball);
      }, 3500);
    });
  },
});
