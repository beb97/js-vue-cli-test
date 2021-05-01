<template>
  <div class="flex vertical">
<!--<div>{{name}} ({{abbreviation}})</div>-->
<img v-bind:src="iconAbsolutePath" @click="selectRegion"/>
  </div>
<!--<div>{{nameRef}}</div>-->
</template>

<!--abbreviation-->
<!--iconAbsolutePath-->
<!--name-->
<!--nameRef-->

<script>
export default {
name: "Region.vue",
  props: {
    region: Object
  },
  emits: ['regionSelected'],
  data() {
    return {
      abbreviation: this.region.abbreviation,
      iconAbsolutePath: this.region.iconAbsolutePath,
      name: this.region.name,
      nameRef: this.region.nameRef,
      selected: false,
    }
  },
  methods: {
    selectRegion() {
      console.log("region selected")
      this.$emit('regionSelected', {region:this.name});
    }
  }
}
</script>

<style scoped>

</style>