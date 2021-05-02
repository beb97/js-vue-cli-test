<template>
  <div class="flex horizontal">
        <div v-for="region in regions" :key="region.name" >
          <input :id="region.name" type="checkbox" v-model="selection" v-bind:value="region.name" @change="selectRegion"/>
          <label v-bind:for="region.name">
<!--            {{region.name}}-->
            <img v-bind:src="region.iconAbsolutePath">
          </label>
        </div>
  </div>

</template>


<script>
import globals from '../json/globals-en_us.json'

export default {
name: "Region.vue",
  props: {
    filters: Object
  },
  emits: ['regionSelected'],
  data() {
    return {
      selection: this.filters.region,
      regions: globals.regions,
    }
  },
  methods: {
    selectRegion() {
      console.log("region selected", this.selection)
      this.$emit('regionSelected', {region:this.selection});
    }
  }
}

</script>

<style scoped>

input[type=checkbox] {
  display: none;
}

img {
  width: 64px;
  height: 64px;
  margin-right: 5px;
  box-shadow: 2px 2px lightgray;
}

img:hover {
  border-color: grey;
}

input + label > img {
  border: 3px solid lightgray;
  border-radius: 10px;
}

input:checked + label > img {
  border: 3px solid var(--active-bg-color);
  border-radius: 10px;
  background-color: lightgoldenrodyellow;
}

</style>