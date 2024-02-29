AFRAME.registerComponent('move-to', {
    schema: {
        speed: {type: 'number', default: 3},
        canMove: {type: 'boolean', default: true},
        stopDistance: {type: 'number', default: 2},
        followDistance: {type: 'number', default: 3}
    },

    init: function () {
      // Do something when component first attached.
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        if (!this.data.canMove) return;

        const cameraEl = this.el.sceneEl.camera.el;
        const cameraWorldPos = new THREE.Vector3();
        cameraEl.object3D.getWorldPosition(cameraWorldPos);

        const pos = this.el.object3D.position;
        const distanceToCamera = pos.distanceTo(cameraWorldPos);

        if (distanceToCamera > this.data.followDistance)
        {
            this.moveTowards(cameraWorldPos, timeDelta);
        } else if (distanceToCamera > this.data.stopDistance && distanceToCamera <= this.data.followDistance) {
            this.data.canMove = true;
        } else {
            this.data.canMove = false;
        }
    },

    moveTowards: function(targetPosition, timeDelta) {
        const pos = this.el.object3D.position;
        const direction = new THREE.Vector3().subVectors(targetPosition, pos).normalize();
        direction.y = 0;
        direction.normalize();
        const speed = this.data.speed;
        const moveStep = direction.multiplyScalar(speed * timeDelta / 1000);
        pos.add(moveStep);
    }
});
