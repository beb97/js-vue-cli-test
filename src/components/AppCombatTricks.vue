<template>
  <div class="flex horizontal center">
    <img alt="Runeterra logo" src="../assets/logo.png"/>
    <h1 class="">Combat tricks</h1>
  </div>
  <div class="flex vertical center">
    <div id="filters">
      <Filters v-bind:filters="filters" @filtersUpdated="updateFilters"></Filters>
    </div>
    <div>
      <Regions v-bind:filters="filters" @regionSelected="updateFilters"></Regions>
    </div>
  </div>
  <div class="sticky flex center">
  <div><a href="#filters">go to filters</a></div>
<!--  <div ><a href="#filters" @click="resetFilters">reset filters</a></div>-->
  </div>
  <div id="cards" class="flex horizontal center">
    <Cards v-bind:cards="filteredCards"></Cards>
  </div>
</template>


<script>
import Cards from './Cards'
import Regions from './Regions'
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
    Regions,
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
    resetFilters() {
      this.filters.region=[];
      this.filters.cost=[0,1,2,3];
      console.log("filters reset", this.filters);
    },
    updateFilters(filters) {
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

<style scoped>
.sticky {
  background-color: var(--main-bg-color);
  z-index: 3;
  height: 40px;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: lightgray;
  border: 3px solid lightgray;
  border-radius: 10px;
  padding: 0 10px;
  white-space: nowrap;
}

a:hover {
  color: var(--active-bg-color);
  border-color: var(--active-bg-color);
}
</style>
