<template>
  <div class="flex vertical center">

    <img alt="Vue logo" src="./assets/logo.png">
  </div>

<!--  <AppCurrentDeck>-->
<!--  </AppCurrentDeck>-->

  <AppCombatTricks >
  </AppCombatTricks>


</template>


<script>
import AppCombatTricks from './components/AppCombatTricks'
// import AppCurrentDeck from './components/AppCurrentDeck'


export default {
  name: 'App',
  components: {
    AppCombatTricks,
    // AppCurrentDeck,
  },
  data() {
    return {
    }
  },
  computed: {


  },
  methods: {

    },

}
</script>

<style>
@import './assets/css/main.css';
</style>
