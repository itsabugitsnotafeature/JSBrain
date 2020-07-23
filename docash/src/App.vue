<template>
  <div class="doacash-app" id="app">
    <div class="doacash-app__first-landing-container visible">
      Happy Birthday Bhai!
    </div>

    <div class="doacash-app__main-container hidden">
      <img class="doacash-app__background" :src="getRandomPic()" />
      <!-- <NavBar /> -->
      <router-view />
      <!-- <Footer /> -->
    </div>
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
    renderMainContainer() {
      const domToShow = document.querySelectorAll(
        ".doacash-app__main-container"
      )[0];
      const domToHide = document.querySelectorAll(
        ".doacash-app__first-landing-container"
      )[0];

      domToShow.classList.remove("hidden");
      domToShow.classList.add("visible");

      domToHide.classList.remove("visible");
      domToHide.classList.add("hidden");
    },

    // Function to generate random number
    randomImageNumber() {
      return Math.floor(
        Math.random() * (this.picHigh - this.picLow + 1) + this.picLow
      );
    }
  },
  mounted() {
    const self = this;

    setTimeout(() => {
      self.renderMainContainer();
    }, 2000);
  }
};
</script>

<style>
.doacash-app__first-landing-container,
.doacash-app__main-container {
  transition: 2s;
}

.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 2s linear;
}

.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 2s ease-out;
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

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
