<template>
  <div class="container flex vertical">
    <div class="name">{{name}}</div>
    <div class="desc">{{description}}</div>
  </div>
<!--<div>{{nameRef}}</div>-->
</template>

<!--description-->
<!--name-->
<!--nameRef-->

<script>
export default {
name: "Keyword.vue",
  props: {
    keyword: Object
  },
  data() {
    return {
      description: this.keyword.description,
      name: this.keyword.name,
      nameRef: this.keyword.nameRef,
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
  .desc {
    width: 128px;
  }
</style>