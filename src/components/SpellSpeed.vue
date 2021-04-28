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
name: "SpellSpeed.vue",
  props: {
    spellSpeed: Object
  },
  data() {
    return {
      name: this.spellSpeed.name,
      nameRef: this.spellSpeed.nameRef,
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