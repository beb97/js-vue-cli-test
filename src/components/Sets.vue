<template>
  <div class="container flex vertical">
    <div class="name">{{name}}</div>
    <img v-bind:src="iconAbsolutePath"/>
  </div>
<!--<div>{{nameRef}}</div>-->
</template>

<!--description-->
<!--name-->
<!--nameRef-->

<script>
export default {
name: "Sets.vue",
  props: {
    set: Object
  },
  data() {
    return {
      name: this.set.name,
      nameRef: this.set.nameRef,
      iconAbsolutePath: this.set.iconAbsolutePath,
    }
  }
}
</script>

<style scoped>
  .container {
    border: 1px solid grey;
  }
  .name {
    font-weight: bold;
  }
  img {
    width: 128px;
  }
</style>