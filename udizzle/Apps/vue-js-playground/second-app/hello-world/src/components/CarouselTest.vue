
<template>
  <!-- Example 1: Basic Usage -->
  <carousel
    class="carousel"
    :nav="false"
    :items="1"
    :center="true"
    :dots="false"
  >
    <img class="carousel-item" src="https://placeimg.com/200/200/any?1">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?2">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?3">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?4">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?5">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?6">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?7">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?8">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?9">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?10">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?11">
    <img class="carousel-item" src="https://placeimg.com/200/200/any?12">
  </carousel>

</template>

<script>
/*
  Source: https://vuejsexamples.com/vue-component-for-owl-carousel-2/ 
  Demo: https://owlcarousel2.github.io/OwlCarousel2/

*/ 
import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.carousel-item {
  width: 500px !important;
  height: 500px;
  margin: auto;
}

</style>
