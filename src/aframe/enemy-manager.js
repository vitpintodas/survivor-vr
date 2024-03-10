AFRAME.AFRAME.registerComponent("enemy-manager", {
  schema: {
    count: { type: "number", default: 10 },
  },

  init: function () {},

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});
