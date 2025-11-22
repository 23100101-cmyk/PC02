<template>
  <div class="row q-col-gutter-md">
    <div v-for="d in digimons" :key="d.name" class="col-12 col-sm-6 col-md-4 col-lg-3">
      <DigimonCard :digimon="d" />
    </div>
  </div>
</template>

<script>
import DigimonCard from './DigimonCard.vue'

export default {
  props: ['digimons'],
  components: { DigimonCard },
}
</script>
