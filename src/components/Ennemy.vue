<script setup>
import "../aframe/clickable.js";

function removeMesh(el) {
  console.log('bonjour');
  el.parentNode.removeChild(el);
}

defineProps({
  scale: Number,
  color: String,
});
</script>

<template>
  <a-entity
    gltf-model="#goblin"
    position="0 -0.044 -30"
    scale="0.0013 0.0013 0.0013"
    look-at="target: #head"
    clickable
    move-to

    @click="removeMesh($event.target)"
  ></a-entity>
</template>
