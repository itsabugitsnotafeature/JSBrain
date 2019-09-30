
<template>
  <!-- Example 1: Basic Usage -->
  <div id="imgViaApi">
    <carousel
        class="carousel"
        :nav="false"
        :items="1"
        :center="true"
        :dots="false"
      >
      <!-- <img class="carousel-item" :src="img" /> -->
        <section class="carousel-item" v-for="a in asteroids" :key="a.ne0_reference_id">
          {{a.id}}
        </section>
    </carousel>
  </div>
</template>


<script>
/*
  Source: https://vuejsexamples.com/vue-component-for-owl-carousel-2/ 
  Demo: https://owlcarousel2.github.io/OwlCarousel2/
  https://api.nasa.gov/planetary/apod?api_key=xuV24A5cq6gJlD8hv4lR7uXuvV4O32z7uJ0AZK5I
*/
import carousel from "vue-owl-carousel";
import Vue from "vue";
const axios = require("axios");
const API_KEY = 'xuV24A5cq6gJlD8hv4lR7uXuvV4O32z7uJ0AZK5I';
const URL1 =
  `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
const URL2 =
  `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`

export default {
  name: "imgViaApi",
  components: { carousel },
  
  created: function () {
    console.log('Fetching Image! ');
    this.getImage();
    this.getAsteroids();
  },
  props: {
  },
  data: function() {
    return {
      img: '',
      asteroids: [],
    };
  },
  methods: {
    getAsteroids: function() {
      var app = this;
      
      axios.get(URL2).then(function(response) {
        // handle success
        app.asteroids = response.data.near_earth_objects; 
      });

    },
    getImage: function() {
      var app = this;
      axios.get(URL1).then(function(response) {
        // handle success
        app.img = response.data.url; 
      });
    },
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-item {
  /* width: 100px !important;
  height: 100px; */
  margin: auto;
}
</style>
