<template>
  <Nav :currentRoute="currentRoute" />
  <router-view/>
  <Footer />
</template>

<script>
  import Nav from './components/Nav.vue'
  import Footer from './components/Footer.vue'
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';

  export default {
    components: {Nav, Footer},
    setup() {
      let store = useStore();
      let router = useRouter();
      let currentRoute = computed(() => store.getters.getCurrentRoute);

      onMounted(() => {
        store.dispatch('getRoute', router.currentRoute.value.path);
      });

      router.afterEach((to) => {
        store.dispatch('getRoute', to.path);
      });

      return {currentRoute}
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

a {
  text-decoration: none;
}

</style>
