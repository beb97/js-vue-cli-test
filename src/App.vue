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

  <footer class="flex horizontal center"><div>Last update : 09 may 2021 © beb97 <a href="https://paypal.me/beb97">support me !</a> </div></footer>
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
  margin-top: 30px;
  /*margin: 20px;*/
  color: lightgray;
  text-align: center;
  font-size: 0.8em;

}

footer a {
  color: var(--active-bg-color);
  border-width: 1px;
  font-weight: normal;
}
footer a:visited {
  color: var(--main-shadow-color);
}
</style>
