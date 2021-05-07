<template>
  <div class="flex vertical center card" >

    <div class="sprite-code" > {{sprite.code}} </div>
    <div class="sprite-mask" v-bind:style="{
        'backgroundColor': getCurrentColor,
         'maskImage': getBGImage(),
         '-webkitMaskImage': getBGImage()
          }">
      <div class="sprite" v-bind:style="{
             'backgroundImage': getBGImage(),
              }"></div>
    </div>
  </div>
</template>

<script>

// require("@/assets/images/user-img-placeholder.png")

export default {
  name: "Sprite",
  props: ['sprite'],
  // emits: ['spriteselected'],
  data() {
    return {
    }
  },
  computed:{
    getCurrentColor() {
      return 'white';
    }
  },
  methods:{
    getBGImage() {
      return 'url('+require('../assets/img/sprites/'+this.sprite.index+'.png')+')';
    },
  }
}
</script>

<style>
.sprite {
  width: 128px;
  height: 128px;
  /*background-blend-mode: multiply;*/
  mix-blend-mode: multiply;
  background-image: url("../assets/grid1.png");
}

.sprite-mask {
  width: 128px;
  height: 128px;
  background-color: white;
}

.sprite-code {
  max-width: 128px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>