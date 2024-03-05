import { copyPosition, copyRotation } from "../utils/aframe";

AFRAME.registerComponent('fire-ball-movement', {
    schema: {
        speed: { type: "number", default: 5 },
    },

    init: function () {
      // Do something when component first attached.
    },

    tick: function (time, timeDelta) {
        const deltaTime = timeDelta / 1000;

        const direction = new THREE.Vector3();
        this.el.object3D.getWorldDirection(direction);
        direction.multiplyScalar(-1);

        const velocity = this.data.speed;
        const movement = direction.multiplyScalar(velocity * deltaTime);
        

        this.el.object3D.position.add(movement);
    }
});
