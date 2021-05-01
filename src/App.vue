<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Card picker"/>
  <div id="filters" class="flex horizontal">
    <Filters v-bind:initialFilters="filters"></Filters>
  </div>
  <div id="regions" class="flex horizontal">
    <Region v-for="region in regions" :key="region.nameRef" v-bind:region="region"></Region>
  </div>
  <div id="sets" class="flex horizontal" v-if="false">
    <Sets v-for="set in sets" :key="set.nameRef" v-bind:set="set"></Sets>
  </div>
  <div id="spellSpeeds" class="flex horizontal" v-if="false">
    <SpellSpeed v-for="spellSpeed in spellSpeeds" :key="spellSpeed.nameRef" v-bind:spellSpeed="spellSpeed"></SpellSpeed>
  </div>
  <div id="rarities" class="flex horizontal" v-if="false">
    <Rarity v-for="rarity in rarities" :key="rarity.nameRef" v-bind:rarity="rarity"></Rarity>
  </div>
  <div id="keywords" class="flex horizontal" v-if="false">
    <Keyword v-for="keyword in keywords" :key="keyword.nameRef" v-bind:keyword="keyword"></Keyword>
  </div>
  <div id="cards" class="flex horizontal">
    <Cards v-for="card in filteredCards" :key="card.cardCode" v-bind:card="card"></Cards>
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import Cards from './components/Cards'
import Region from './components/Region'
import Keyword from './components/Keyword'
import SpellSpeed from './components/SpellSpeed'
import Rarity from './components/Rarity'
import Sets from './components/Sets'
import Filters from './components/Filters'

import globals from './json/globals-en_us.json'
import set1 from './json/set1-en_us.json'
// import set2 from './json/set2-en_us.json'
// import set3 from './json/set3-en_us.json'
// import set4 from './json/set4-en_us.json'

export default {
  name: 'App',
  components: {
    Filters,
    HelloWorld,
    Cards,
    Region,
    Keyword,
    SpellSpeed,
    Rarity,
    Sets,
  },
  data() {
    return {
      vocabTerms: globals.vocabTerms,
      keywords: globals.keywords,
      regions: globals.regions,
      spellSpeeds: globals.spellSpeeds,
      rarities: globals.rarities,
      sets: globals.sets,
      // array: JSON.parse(set1),
      cardsFilter: {name:'Yasuo'},
      filters: {collectible:true},
      set1: set1,
      // set2: set2,
      // set3: set3,
      // set4: set4,
    }
  },
  computed: {
    filteredCards() {
      // SORT :
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

      return set1.slice(0, 200).filter(card => card.collectible == this.filters.collectible).sort((a,b) => a.cost - b.cost);
      // return this.set1[0].filter(function (card) {
      //   return card.name = 'Yasuo';
      // });
    },

  },
  methods: {
    // updateFilters(filters) {
    //   this.filters = filters;
    //   console.log("APP : Filters updated : "+filters);
    // },

  }
}
</script>

<style>
@import './assets/css/main.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
