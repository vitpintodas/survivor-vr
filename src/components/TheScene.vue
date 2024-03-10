<script setup>
import TheCameraRig from "./TheCameraRig.vue";
import Ennemy from "./Ennemy.vue";
import "../aframe/enemies.js";
import "../aframe/look-at.js";
import "../aframe/duplicate-me.js";
import "../aframe/move-to.js";
import "../aframe/clickable.js";
import "../aframe/event-set.js";
import "../aframe/fire-ball";
import "../aframe/fire-ball-movement";

import { ref } from "vue";

/**
 * Gère l'apparition des énemis
 */
const totalEnemies = 10;
const spacing = 4;
const middlePoint = ((totalEnemies - 1) * spacing) / 2;

const enemiesPos = ref(
  [...Array(totalEnemies)].map((_, index) => ({
    x: index * spacing - middlePoint,
    y: -0.044,
    z: -30,
  }))
);

defineProps({
  scale: Number,
  overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    background="color: black;"
    fog="type: linear; color: #3e5a53; far: 50"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
    stats
  >
    <a-assets @loaded="allAssetsLoaded = true">
      <!-- modèles 3D -->
      <a-asset-item
        id="skeleteon"
        src="assets/lowpoly_skeleteon.glb"
      ></a-asset-item>

      <!-- textures -->
      <img id="lave-texture" :src="`assets/lava.jpg`" />
      <img id="sol-texture" :src="`assets/stone_floor.jpg`" />

      <!-- musique + effets sonores -->
      <audio id="general" src="assets/general.wav" preload="auto"></audio>
      <audio id="destroy" src="assets/destroy.wav" preload="auto"></audio>
    </a-assets>

    <template v-if="allAssetsLoaded" fog>
      <a-entity
        light="color: #848484; intensity: 3"
        position="0 10 0"
      ></a-entity>
      <a-entity sound="src: #general; autoplay: true; loop: true"></a-entity>
      <a-plane
        height="50"
        width="50"
        material="src: #sol-texture; repeat: 10 10; metalness: 0; roughness: 1"
        rotation="-90 0 0"
      ></a-plane>
      <Ennemy
        v-for="(position, index) in enemiesPos"
        :key="index"
        :position="`${position.x} ${position.y} ${position.z}`"
        :id="`enemy-${index}`"
      />
      <a-box color="blue" position="0, 0.5, 0" depth="1"></a-box>
    </template>
    <TheCameraRig />
  </a-scene>
</template>
