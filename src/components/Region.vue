<template>
  <div class="flex vertical">
<div>{{name}} ({{abbreviation}})</div>
<img v-bind:src="iconAbsolutePath"/>
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
  data() {
    return {
      abbreviation: this.region.abbreviation,
      iconAbsolutePath: this.region.iconAbsolutePath,
      name: this.region.name,
      nameRef: this.region.nameRef,
    }
  }
}
</script>

<style scoped>
img {
  width: 128px;
}
</style>