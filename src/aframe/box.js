// nombre de tuiles par axe
const tilesY = 10;
const tilesX = 10;

AFRAME.registerComponent('cube', {
    schema: {
        width: {type: 'number', default: 1},
        height: {type: 'number', default: 1},
        depth: {type: 'number', default: 1},
        color: {type: 'color', default: 'green'}
    },

    init: function () {
    //   this.el.setAttribute('geometry', {
    //     primitive: 'box',
    //     height: 1,
    //     widht: 1,
    //     depth: 1
    //   });

    //   this.el.setAttribute('material', { color: 'green' });

    for(let i = 0; i < tilesX; i++) {
        for(let j = 0; j < tilesY; j++) {
            const box = document.createElement('a-box');
            box.setAttribute('color', (i + j) % 2 === 0 ? 'red' : 'green');
            box.setAttribute('position', `${i} ${.02} ${j}`);
            this.el.appendChild(box);
        }
            // const box = document.createElement('a-box');
            // box.setAttribute('color', 'red');
            // box.setAttribute('position', {x: 2, y: 1, z: -3});
            // this.el.appendChild(box);

        // for(let j = 0; i < tilesY; j++) {
        //     const box = document.createElement('a-box');
        //     box.setAttribute('color', 'red');
        //     box.setAttribute('position', {x: 2, y: 1, z: -3});
        //     this.el.appendChild(box);
        // }
    }
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
