<template>
  <div class="container flex vertical">
    <div class="name">{{name}}</div>
  </div>
<!--<div>{{nameRef}}</div>-->
</template>

<!--description-->
<!--name-->
<!--nameRef-->

<script>
export default {
name: "Rarity.vue",
  props: {
    rarity: Object
  },
  data() {
    return {
      name: this.rarity.name,
      nameRef: this.rarity.nameRef,
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
</style>