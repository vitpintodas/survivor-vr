<script setup>
import "../aframe/emit-when-near.js";
import "../aframe/event-set.js";
import "../aframe/clickable.js";

function removeMesh() {
  console.log('bonjour');
}

defineProps({
  scale: Number,
  color: String,
});
</script>

<template>
  <!-- <a-entity
    gltf-model="#goblin"
    position="0 -0.044 -30"
    scale="0.0013 0.0013 0.0013"
    look-at="target: #head"
    duplicate-me="nbTimes: 2; msInterval: 100"
    clickable
    move-to
  ></a-entity> -->
  <a-entity
    gltf-model="#goblin"
    position="0 -0.044 -30"
    scale="0.0013 0.0013 0.0013"
    look-at="target: #head"
    clickable
    move-to

    @click="kill = removeMesh()"
  ></a-entity>
</template>
