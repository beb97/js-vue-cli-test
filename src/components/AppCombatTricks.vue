<template>
  <div class="flex horizontal center">
    <h1>Combat tricks</h1>
  </div>
  <div class="flex vertical center">
    <div id="filters" class="flex vertical">
      <Filters v-bind:filters="filters" @filtersUpdated="updateFilters"></Filters>
    </div>
<!--    <div id="regions" class="flex horizontal">-->
<!--      <Region v-for="region in regions" :key="region.nameRef" v-bind:region="region" @regionSelected="updateFilters"></Region>-->
<!--    </div>-->
    <div class="flex horizontal">
      <Regions v-bind:filters="filters" @regionSelected="updateFilters"></Regions>
    </div>
    <div id="sets" class="flex horizontal" v-if="false">
      <Sets v-for="set in sets" :key="set.nameRef" v-bind:set="set"></Sets>
    </div>
<!--    <div id="spellSpeeds" class="flex horizontal" v-if="false">-->
<!--      <SpellSpeed v-for="spellSpeed in spellSpeeds" :key="spellSpeed.nameRef" v-bind:spellSpeed="spellSpeed"></SpellSpeed>-->
<!--    </div>-->
<!--    <div id="rarities" class="flex horizontal" v-if="false">-->
<!--      <Rarity v-for="rarity in rarities" :key="rarity.nameRef" v-bind:rarity="rarity"></Rarity>-->
<!--    </div>-->
<!--    <div id="keywords" class="flex horizontal" v-if="false">-->
<!--      <Keyword v-for="keyword in keywords" :key="keyword.nameRef" v-bind:keyword="keyword"></Keyword>-->
<!--    </div>-->
  </div>
  <div id="cards" class="flex horizontal center">
    <Cards v-bind:cards="filteredCards"></Cards>
  </div>
</template>


<script>
import Cards from './Cards'
// import Region from './components/Region'
import Regions from './Regions'
// import Keyword from './components/Keyword'
// import SpellSpeed from './components/SpellSpeed'
// import Rarity from './components/Rarity'
import Sets from './Sets'
import Filters from './Filters'

import globals from '../json/globals-en_us.json'
import set1 from '../json/set1-en_us.json'
import set2 from '../json/set2-en_us.json'
import set3 from '../json/set3-en_us.json'
import set4 from '../json/set4-en_us.json'
import excluded from '../json/excluded.json'

export default {
  name: 'AppCombatTricks',
  components: {
    Filters,
    Cards,
    // Region,
    Regions,
    // Keyword,
    // SpellSpeed,
    // Rarity,
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
      sorts: ['region','cost'],
      filters: {
        region:["Demacia"],
        cost:[0,1,2,3],
        spellSpeed:["Burst", "Fast"],
      },
      excluded: excluded,
      set1: set1,
      set2: set2,
      set3: set3,
      set4: set4,
    }
  },
  computed: {
    collectibles() {
      let sets = this.set1.concat(this.set2, this.set3, this.set4);
      return sets.filter(card => card.collectible).sort(this.sortCards);
    },
    filteredCards() {
      // SORT :
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

      return this.combatTricks.filter(this.filterCards);
      // return set1.slice(0, 200).filter(card => card.collectible == this.filters.collectible).sort((a,b) => a.cost - b.cost);
    },
    combatTricks() {
      return this.collectibles.filter(this.filterCombatTricks);
    }

  },
  methods: {
    updateFilters(filters) {
      console.log("APP",filters);
      // Due to limitations in JavaScript, Vue cannot detect the following changes to an array:
      this.filters[Object.keys(filters)]=Object.values(filters)[0];
      // So we force update
      this.$forceUpdate();
    },
    filterCards: function(card) {
      for (const [key, value] of Object.entries(this.filters)) {
        if (!value.includes(card[key])) {
          return false;
        }
      }
      return true;
    },
    filterCombatTricks: function(card) {
      let speeds= ["Burst", "Fast"];
      console.log(Object.keys(this.excluded));
      return speeds.includes(card.spellSpeed)
          && ! Object.keys(this.excluded).includes(card.cardCode);
    },

    sortCards: function(a,b) {
      let result;
      this.sorts.forEach(key => {
            if( isNaN(a[key]) ){
              result = a[key].localeCompare(b[key], undefined, {numeric: true, sensitivity: 'base'})
            } else {
              result = a[key] - b[key];
            }
            if (result !== 0) {
              return result;
            }
          }
      )
      return result;
    }
  }
}
</script>

<style>

</style>
