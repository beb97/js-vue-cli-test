<template>
  <div class="container flex horizontal">
    Collectible :
    <label for="checkbox-collectible">{{ filters }}</label>
    <input id="checkbox-collectible" type="checkbox" v-model="filters.collectible"/>
  </div>

</template>


<script>
export default {
name: "Filters.vue",
  props: ['initialFilters'],
  // emits: ['filtersUpdated'],
  data() {
    return {
      filters: this.initialFilters
    }
  },
  methods : {
    // updatedFilters() {
    //   console.log("FILTERS : calling onchange updatedFilters")
    //   this.$emit('filtersUpdated', this.filters);
    // },
  }
}
</script>

<style scoped>

</style>