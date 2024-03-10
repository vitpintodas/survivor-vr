<script setup>
import "../aframe/clickable.js";
import "../aframe/animation-mixer.js";

const hitboxOpacity = 0;

function hit(evt) {
  const ballOrMob = evt.detail.otherComponent.el;
  const mob = evt.target;

  const soundSrc = "assets/destroy.wav";
  const audio = new Audio(soundSrc);

  if (
    mob.getAttribute("id")?.includes("enemy") &&
    ballOrMob.getAttribute("id")?.includes("enemy")
  )
    return;

  if (ballOrMob.getAttribute("id")?.includes("fireball")) {
    audio.play();
    mob.parentNode.removeChild(mob);
  }
}

defineProps({
  scale: Number,
  color: String,
});
</script>

<template>
  <a-entity
    gltf-model="#skeleteon"
    scale="0.12 0.12 0.12"
    position="0 -0.044 -30"
    look-at="constrainVertically: true"
    animation-mixer
    move-to
    physx-body="type: kinematic; emitCollisionEvents: true;"
    @contactbegin="(evt) => hit(evt)"
  >
    <a-box
      id="enemy"
      :opacity="hitboxOpacity"
      scale="1 1 1"
      color="red"
      height="16.840"
      depth="6.660"
      width="6.150"
      position="0 9.156 0"
    ></a-box
  ></a-entity>
</template>
