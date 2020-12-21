<template>
  <base-card> <h2>Find Your Coach</h2></base-card>
  <span class="filter-option">
    <input @change="setFilter" type="checkbox" id="frontend" checked />
    <label for="frontend">Frontend</label>
  </span>
  <span class="filter-option">
    <input @change="setFilter" type="checkbox" id="backend" checked />
    <label for="backend">Backend</label>
  </span>
  <span class="filter-option">
    <input @change="setFilter" type="checkbox" id="career" checked />
    <label for="career">Career</label>
  </span>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  emits: ['change-filter'],
  methods: {
    setFilter(e) {
      const id = e.target.id;
      const isActive = e.target.checked;
      const updatedFilters = {
        ...this.filters,
        [id]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
