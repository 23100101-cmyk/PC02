<template>
  <q-page padding>
    <h2 class="text-h5 q-mb-md">Listado de Digimons</h2>

    <!-- FILTROS -->
    <DigimonFilter :filters="filters" @update:filters="filters = $event" />

    <!-- LISTA -->
    <DigimonList :digimons="filteredDigimons" />
  </q-page>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import DigimonFilter from 'components/DigimonFilter.vue'
import DigimonList from 'components/DigimonList.vue'

export default {
  components: {
    DigimonFilter,
    DigimonList,
  },

  setup() {
    const digimons = ref([])
    const filters = ref({
      name: '',
      level: '',
    })

    const loadDigimons = async () => {
      const res = await fetch('https://digimon-api.vercel.app/api/digimon')
      digimons.value = await res.json()
    }

    const filteredDigimons = computed(() => {
      return digimons.value.filter((d) => {
        const matchName = d.name.toLowerCase().includes(filters.value.name.toLowerCase())

        const matchLevel = filters.value.level === '' || d.level === filters.value.level

        return matchName && matchLevel
      })
    })

    onMounted(loadDigimons)

    return {
      digimons,
      filters,
      filteredDigimons,
    }
  },
}
</script>
