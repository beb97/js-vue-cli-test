<template>
  <div class="container flex vertical">
    <form>
      <div id="data">
        <select class="" multiple size="1" v-model="cost" @change="selectCost">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12+</option>
        </select>
<!--        <select multiple size="1" v-model="cost" @change="selectCost">-->
<!--          <option v-for="region in filters.regions" :key="region.name">{{ region.name }}</option>-->
<!--        </select>-->
      </div>
    </form>
<!--    <div>{{ filters }}</div>-->
    <div>
<!--      <span  @click="selectCost" class="mana-cost" v-for="n in 10" :key="n">{{ n }} </span>-->
    </div>
<!--    <input id="checkbox-collectible" type="checkbox" v-model="filters.collectible"/>-->
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
      cost: this.filters.cost,
      attack: this.filters.attack,
      health: this.filters.health,
      name: this.filters.name,
      keywords: this.filters.keywords,
      spellSpeed: this.filters.spellSpeed,
      rarity: this.filters.rarity,
      // collectible: this.collectible,
      // set: this.filters.set,
    }
  },
  methods : {
    selectCost() {
      let result = [];

      for(const property in this.cost) {
        result.push(parseInt(this.cost[property]));
      }

      // console.log("FILTERS result:", result)
      this.$emit('filtersUpdated', {'cost':result});
    },
  }
}
</script>

<style scoped>
select {
  width:100%;
  height:100%;
  white-space: normal;
  border: 0;
  outline: none;
  overflow:hidden;
  background: transparent;
  margin-bottom: 10px;
}

select:active, select:hover {
  outline: none
}
  option {
    border: 3px #A99F8D solid;
    background: transparent;
    color: darkgray;
    font-weight: bold;
    border-radius: 30px;
    padding: 15px;
    margin-right: 2px;
    box-shadow: 3px 0px lightgray;
    display: inline-flex;
  }

  /*select[multiple]:focus option:checked {*/
  /*  background: #18326B;*/
  /*  color: red;*/
  /*}*/

option:checked, option:hover {
  background: #18326B;
  color: white;
}



</style>