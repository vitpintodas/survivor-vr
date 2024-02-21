<script setup>

import TheCameraRig from './TheCameraRig.vue';
import '../aframe/box.js';

defineProps({
  scale: Number,
  overlaySelector: String,
});

</script>

<template>
  <a-scene  
    background="color: black"
    fog="type: linear; color: #c3938f; far: 50"
    stats
  >
    <a-entity light="color: #bcbcbc; intensity: 3" position="-1 1 0">
      <a-ocean color="#4d696d" width="100" depth="100" density="55" speed="0.1"></a-ocean>
      <a-ocean color="#35474a" width="100" depth="100" density="35" speed="0.4"></a-ocean>
      <a-entity cube></a-entity>
      <TheCameraRig />
    </a-entity>
  </a-scene>
</template>