AFRAME.registerComponent('enemy', {

    init: function () {
      for(let i = 0; i < 5; i++)
      {
        const box = document.createElement('a-entity');
        box.setAttribute('id', 'block1');
        box.setAttribute('position', `${i * 2} ${.5} ${-3}`);
        //box.setAttribute('look-at', 'target:#head');
        box.setAttribute('instanced-mesh-member', 'mesh:#mesh1');
        box.setAttribute('look-at', 'target:#head');

        this.el.appendChild(box);
      }
    },
});
