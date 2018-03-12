<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* xs < 768 */
@media screen and (max-width: 767px) {
    body {
        font-size: 0.7em;
    }
}

/* sm */
@media screen and (min-width: 768px) {
    body {
        font-size: 0.7em;
    }
}

/* md */
@media screen and (min-width: 992px) {
    body {
        font-size: 0.7em;
    }
}

/* lg */
@media screen and (min-width: 1200px) {
    body {
        font-size: 1em;
    }
}
</style>
