<template>

  <div class="container flex horizontal">
    <output class="range-value flex center"><div>0</div></output>
    <!--               :style="{marginLeft:''+20*cost+'px'}">-->

    <input type="range" min="0" max="10" class="slider" id="costSlider" list="costSliderTicks" v-model="cost" @change="selectCost">
    <output class="range-value flex center"><div>{{cost}}</div></output>
    <datalist id="costSliderTicks">
      <option value="0" label="0"></option>
      <option value="3" label="3"></option>
      <option value="10" label="10"></option>
    </datalist>
  </div>

</template>


<script>
export default {
  name: "Filters.vue",
  props: ['filters'],
  emits: ['filtersUpdated'],
  data() {
    return {
      region: this.filters.region,
      cost: this.filters.cost[this.filters.cost.length - 1],
      // attack: this.filters.attack,
      // health: this.filters.health,
      // name: this.filters.name,
      // keywords: this.filters.keywords,
      spellSpeed: this.filters.spellSpeed,
      // rarity: this.filters.rarity,
      // collectible: this.collectible,
      // set: this.filters.set,
    }
  },
  methods : {
    selectCost() {
      let result = Array.from({length: this.cost}, (_, index) => index + 1);
      console.log(result);
      this.$emit('filtersUpdated', {'cost':result});
    },
  }
}

</script>

<style scoped>

input[type=range] {
  -webkit-appearance: none;
  background-color: transparent;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  animate: 0.2s;
  background: var(--active-bg-color);
}
input[type=range]::-webkit-slider-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--mana-color);
  /*background: #fff;*/
  box-shadow: 0 0 4px 0 rgba(0,0,0, 1);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8px;
}

input[type=range]::-webkit-slider-thumb:hover {

  background: var(--active-bg-color);
  border: 3px solid var(--mana-color);

}

input[type=range]::-webkit-slider-thumb {

}

.container {
  /*width: 300px;*/
  margin: 20px;
}

datalist {
  /*display: inline-flex;*/
}

output {
  border: 3px #A99F8D solid;
  border-radius: 50%;
  background: #18326B;
  color: white;
  text-align: center;
  vertical-align: center;
  width: 30px;
  height: 30px;
  /*padding: 10px;*/
}
</style>