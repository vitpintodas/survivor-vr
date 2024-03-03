AFRAME.registerComponent('fireball', {

    init: function () {
      const laser = document.createElement("a-entity");
      laser.setAttribute("geometry", "primitive: sphere; radius: 0.1");
      laser.setAttribute("material", "color: red");
      laser.setAttribute("physx-body", "type: kinematic; emitCollisionEvents: true");

      const worldPos = new THREE.Vector3();
      const worldRot = new THREE.Quaternion();

      this.el.object3D.getWorldPosition(worldPos);
      this.el.object3D.getWorldQuaternion(worldRot);

      laser.setAttribute("position", worldPos);
      laser.object3D.quaternion.copy(worldRot);

      this.el.sceneEl.appendChild(laser);

      setTimeout(() => {
        laser.parentNode.removeChild(laser);
      }, 500);
    },

});
