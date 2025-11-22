<template>
  <q-page class="q-pa-md">
    <div class="row q-gutter-md items-center">
      <!-- Buscar por nombre -->
      <div class="col-12 col-md-4">
        <q-input filled v-model="searchName" label="Buscar por nombre" @input="applyFilters" />
      </div>

      <!-- Buscar por nivel -->
      <div class="col-12 col-md-4">
        <q-select
          filled
          v-model="searchLevel"
          :options="levels"
          label="Filtrar por nivel"
          clearable
          @update:model-value="applyFilters"
        />
      </div>
    </div>

    <div class="row q-gutter-md q-mt-md">
      <div
        v-for="digi in filteredDigimon"
        :key="digi.name"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <q-card bordered>
          <q-img :src="digi.img" :alt="digi.name" ratio="1" />

          <q-card-section>
            <div class="text-h6">{{ digi.name }}</div>
            <div class="text-subtitle2">Nivel: {{ digi.level }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      digimon: [],
      filteredDigimon: [],

      searchName: '',
      searchLevel: null,

      levels: [], // niveles únicos
    }
  },

  async created() {
    const res = await axios.get('https://digimon-api.vercel.app/api/digimon')
    this.digimon = res.data
    this.filteredDigimon = res.data

    // obtener niveles únicos
    this.levels = [...new Set(res.data.map((d) => d.level))]
  },

  methods: {
    applyFilters() {
      this.filteredDigimon = this.digimon.filter((digi) => {
        const matchName = digi.name.toLowerCase().includes(this.searchName.toLowerCase())

        const matchLevel = !this.searchLevel || digi.level === this.searchLevel

        return matchName && matchLevel
      })
    },
  },
}
</script>
