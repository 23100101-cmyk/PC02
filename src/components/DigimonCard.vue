<template>
  <q-card class="my-card">
    <q-img :src="digimon.img" :alt="digimon.name" height="200px" />

    <q-card-section>
      <div class="text-h6">{{ digimon.name }}</div>
      <div class="text-subtitle2">Nivel: {{ digimon.level }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    digimon: Object
  }
};
</script>
