<template>
  <div class="flex vertical center">
    <h1>Current Deck</h1>
    Work in progress
  </div>
<!--  <div id="cards" class="flex horizontal center">-->
<!--    <Cards v-bind:cards="filteredCards"></Cards>-->
<!--  </div>-->

</template>


<script>
// import Cards from './Cards'

import set1 from '../json/set1-en_us.json'
import set2 from '../json/set2-en_us.json'
import set3 from '../json/set3-en_us.json'
import set4 from '../json/set4-en_us.json'
import {onMounted, ref} from "vue";

export default {
  name: 'AppCurrentDeck',
  components: {
    // Cards,
  },
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    // function fetchData() {
    //   loading.value= true;
    //   return fetch('http://localhost:21337/static-decklist', {
    //     method: 'get',
    //     // mode: 'no-cors',
    //     headers: {
    //       'content-type': 'text/plain'
    //       // 'content-type': 'application/json'
    //     }
    //   })   .then(res => {
    //     return res.json();
    //   })
    //   .then(json => {
    //     // set the response data
    //     data.value = json.data;
    //   })
    //   .catch(err => {
    //     error.value = err;
    //     console.log(err);
    //   })
    //   .then(() => {
    //     loading.value = false;
    //   });
    // }

    onMounted(() =>
        // fetchData()
    console.log("mounted current deck")
    )

    return {
      data,
      loading,
      error
    }

  },
  data() {
    return {
      sorts: ['region','cost'],
      filters: {
        region:["Demacia"],
        cost:[0,1,2,3],
        spellSpeed:["Burst", "Fast"],
      },
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
      return this.collectibles.filter(this.filterCards);
      // return set1.slice(0, 200).filter(card => card.collectible == this.filters.collectible).sort((a,b) => a.cost - b.cost);
    },

  },
  methods: {
    filterCards: function(card) {
      for (const [key, value] of Object.entries(this.filters)) {
        if (!value.includes(card[key])) {
          return false;
        }
      }
      return true;
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
