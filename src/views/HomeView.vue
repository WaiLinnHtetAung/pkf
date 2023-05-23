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
export default {
  components: {
    HomeNews,
    Event,
    Welcome, Carousel },
    
  }
</script>

<style scoped>

</style>

