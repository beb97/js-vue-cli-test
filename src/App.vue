<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Card picker"/>
  <div id="regions" class="flex horizontal">
    <Region v-for="region in regions" :key="region.nameRef" v-bind:region="region"></Region>
  </div>
  <div id="sets" class="flex horizontal">
    <Sets v-for="set in sets" :key="set.nameRef" v-bind:set="set"></Sets>
  </div>
  <div id="spellSpeeds" class="flex horizontal">
    <SpellSpeed v-for="spellSpeed in spellSpeeds" :key="spellSpeed.nameRef" v-bind:spellSpeed="spellSpeed"></SpellSpeed>
  </div>
  <div id="rarities" class="flex horizontal">
    <Rarity v-for="rarity in rarities" :key="rarity.nameRef" v-bind:rarity="rarity"></Rarity>
  </div>
  <div id="keywords" class="flex horizontal">
<!--    <Keyword v-for="keyword in keywords" :key="keyword.nameRef" v-bind:keyword="keyword"></Keyword>-->
  </div>
  <div id="cards" class="flex vertical">
    <Cards v-for="card in set1" :key="card.cardCode" v-bind:card="card"></Cards>
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import Cards from './components/Cards'
import Region from './components/Region'
// import Keyword from './components/Keyword'
import SpellSpeed from './components/SpellSpeed'
import Rarity from './components/Rarity'
import Sets from './components/Sets'

import globals from './json/globals-en_us.json'
import set1 from './json/set1-en_us.json'
// import set2 from './json/set2-en_us.json'
// import set3 from './json/set3-en_us.json'
// import set4 from './json/set4-en_us.json'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Cards,
    Region,
    // Keyword,
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
      set1: set1,
      // set2: set2,
      // set3: set3,
      // set4: set4,
    }
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
