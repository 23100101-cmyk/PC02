<template>
  <div class="row q-col-gutter-md">

    <!-- Buscar por nombre -->
    <div class="col-12 col-md-6">
      <q-input
        filled
        v-model="filters.name"
        label="Buscar por nombre"
        @input="emitFilters"
      />
    </div>

    <!-- Buscar por nivel -->
    <div class="col-12 col-md-6">
      <q-select
        filled
        v-model="filters.level"
        :options="levels"
        label="Buscar por nivel"
        @update:model-value="emitFilters"
      />
    </div>

  </div>
</template>

<script>
export default {
  emits: ["on-filter"],
  data() {
    return {
      filters: {
        name: "",
        level: "",
      },
      levels: [
        "Fresh",
        "In Training",
        "Rookie",
        "Champion",
        "Ultimate",
        "Mega",
      ],
    };
  },
  methods: {
    emitFilters() {
      this.$emit("on-filter", this.filters);
    },
  },
};
</script>
