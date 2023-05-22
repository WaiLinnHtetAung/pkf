<template>
  <Nav />
  <router-view/>
  <Footer />
</template>

<script>
  import Nav from './components/Nav.vue'
  import Footer from './components/Footer.vue'
  export default {
    components: {Nav, Footer}
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

</style>
