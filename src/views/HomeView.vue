<template>
  <Carousel></Carousel>
  <Welcome></Welcome>
  <Event></Event>
  <HomeNews></HomeNews>
</template>

<script>
import HomeNews from '../components/HomeNews'
import Event from '../components/Event'
import Welcome from '../components/Welcome'
import Carousel from '../components/Carousel'
import { onMounted, onUpdated } from 'vue'
export default {
    components: {HomeNews, Event, Welcome, Carousel },
    setup() {
      onMounted(() => {
        window.scrollTo(0,0);
      })
      onUpdated(() => {
        window.scrollTo(0,0)
      })
    }
  }
</script>

<style scoped>

</style>

