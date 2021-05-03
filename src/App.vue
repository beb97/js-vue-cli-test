<template>

<!--  <AppCurrentDeck>-->
<!--  </AppCurrentDeck>-->

  <AppCombatTricks >
  </AppCombatTricks>


  <footer>by beb97 <a href="https://paypal.me/beb97">support me !</a> </footer>
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

footer {
  margin: 20px;
  color: lightgray;
  text-align: center;
  position: absolute;
  bottom: 0;
}

footer > a {
  border-width: 1px;
  font-weight: normal;
}
</style>
