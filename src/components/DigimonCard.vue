<template>
  <q-card bordered class="my-card">
    <q-img :src="digimon.img" :alt="digimon.name" ratio="4/3" />

    <q-card-section>
      <div class="text-h6">{{ digimon.name }}</div>
      <div class="text-subtitle2">Nivel: {{ digimon.level }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ['digimon'],
}
</script>

<style>
.my-card {
  min-height: 300px;
}
</style>
