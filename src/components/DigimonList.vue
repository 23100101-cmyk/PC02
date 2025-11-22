<template>
  <div class="row q-col-gutter-md q-mt-lg">
    <div
      v-for="d in filtered"
      :key="d.name"
      class="col-12 col-sm-6 col-md-4 col-lg-3"
    >
      <DigimonCard :digimon="d" />
    </div>
  </div>
</template>

<script>
import DigimonCard from "./DigimonCard.vue";
import { computed } from "vue";

export default {
  components: { DigimonCard },
  props: {
    digimons: Array,
    filters: Object
  },

  setup(props) {
    const filtered = computed(() => {
      return (props.digimons || []).filter((d) => {
        const name = d.name.toLowerCase();
        const allText = `${d.name} ${d.level}`.toLowerCase();

        const matchName = name.includes(props.filters.name.toLowerCase());
        const matchLevel = props.filters.level
          ? d.level === props.filters.level
          : true;
        const matchGeneral = allText.includes(
          props.filters.general.toLowerCase()
        );

        return matchName && matchLevel && matchGeneral;
      });
    });

    return { filtered };
  }
};
</script>
