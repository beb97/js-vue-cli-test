<template>
  <header>
    <nav class="display flex center">
      <router-link  to="combat-tricks">combat tricks</router-link>
      <router-link  to="sprites">sprites pickers</router-link>
      <router-link  to="current">current deck</router-link>
    </nav>
<!--    <a href="/combat-tricks">combat tricks</a>-->
<!--    <a href="/sprites">sprites pickers</a>-->
  </header>


  <router-view/>

  <footer>by beb97 <a href="https://paypal.me/beb97">support me !</a> </footer>
</template>


<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {

    }
  },
  computed: {
  },

}
</script>

<style>
@import './assets/css/main.css';

header a {
  text-decoration: none;
  font-weight: bold;
  color: lightgray;
  border: 3px solid lightgray;
  border-radius: 10px;
  padding: 0 10px;
  white-space: nowrap;
  margin: 5px 10px;
}

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
