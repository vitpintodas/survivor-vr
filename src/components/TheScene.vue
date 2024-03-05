<script setup>
import TheCameraRig from "./TheCameraRig.vue";
import Ennemy from "./Ennemy.vue";
import "../aframe/enemies.js";
import "../aframe/look-at.js";
import "../aframe/duplicate-me.js";
import "../aframe/move-to.js";
import "../aframe/clickable.js";
import "../aframe/event-set.js";
import "../aframe/fire-ball"
import "../aframe/fire-ball-movement";

import { ref } from 'vue';

/**
 * Gère l'apparition des énemis
 */
const totalEnemies = 10;
const spacing = 4;
const middlePoint = (totalEnemies - 1) * spacing / 2;

const enemiesPos = ref([...Array(totalEnemies)].map((_, index) => ({
  x: (index * spacing) - middlePoint,
  y: -0.044,
  z: -30
})));

defineProps({
  scale: Number,
  overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene background="color: black;" stats>

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="goblin" src="assets/lowpoly_wizard.glb"></a-asset-item>
      <img id="lave-texture" :src="assets/lava.jpg">
    </a-assets>

    <a-plane height="20" width="20" material="src: #lave-texture)" rotation="-90 0 0"></a-plane>

    <template v-if="allAssetsLoaded">
      <Ennemy v-for="(position, index) in enemiesPos" :key="index" :position="`${position.x} ${position.y} ${position.z}`" />

      <a-box
        color="blue"
        position="0, 0.5, 0"
        depth="1"
      ></a-box>
    </template>
    <TheCameraRig />
  </a-scene>
</template>
