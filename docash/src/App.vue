<template>
  <div class="doacash-app" id="app">
    <div>
      <img class="doacash-app__background" :src="getRandomPic()" />
    </div>
    <!-- <NavBar /> -->
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      picLow: 1,
      picHigh: 39
    };
  },
  methods: {
    getRandomPic() {
      return `static/${this.randomImageNumber()}.jpeg`;
    },

    // Function to generate random number
    randomImageNumber() {
      return Math.floor(
        Math.random() * (this.picHigh - this.picLow + 1) + this.picLow
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.doacash-app__background {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.35;
  z-index: -9999;
}
</style>
