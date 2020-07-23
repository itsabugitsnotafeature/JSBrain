<template>
  <div class="doacash-app" id="app">
    <!-- Welcome Message Container -->
    <div class="doacash-app__first-landing-container visible">
      <div class="doacash-app__first-landing-container-msg-1 valign-wrapper">
        <p class="doacash-app__container--margin-auto">
          Hey Doc!<br />
          Here's Wishing you<br />
          Many<br />
          Many<br />
        </p>
      </div>

      <div class="doacash-app__msg-many-container">
        <p
          class="doacash-app__msg-many-text valing-wrapper"
          data-aos="fade-down-right"
        >
          Many
        </p>
      </div>

      <div class="doacash-app__msg-many-container">
        <p
          class="doacash-app__msg-many-text valing-wrapper"
          data-aos="fade-down-right"
        >
          Many
        </p>
      </div>

      <!-- Final Container -->
      <div class="doacash-app__msg-many-container">
        <!-- Button to toggle view to homepage  -->
        <button
          class="ladytin-homepage__btn btn"
          data-aos="fade-down-right"
          v-on:click="renderMainContainer"
        >
          Click here <br />
          to unwrap your present
        </button>
      </div>
    </div>

    <!-- Main Homepage Container -->
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
import AOS from "aos";
import "aos/dist/aos.css";
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
    scrollToTop() {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 50);
    },

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
    AOS.init();

    const self = this;
    // setTimeout(() => {
    //   self.renderMainContainer();
    // }, 2000);

    // Scroll to top at the very end
    this.scrollToTop();
  }
};
</script>

<style>
.ladytin-homepage__btn:hover,
.ladytin-homepage__btn:focus {
  background-color: #036a8c;
}

.ladytin-homepage__btn {
  width: auto;
  height: auto;
  font-size: 24pt;
  font-family: "HelveticaNowDisplay-Light";
  text-transform: none;
  background-color: #036a8c;
  padding: 20px 48px;
  border-radius: 70px;
}

.doacash-app__container--margin-auto {
  margin: auto;
}

.doacash-app__msg-many-container {
  height: 20vh;
}

.doacash-app__first-landing-container-msg-1 {
  height: 100vh;
  width: 100vw;
  font-family: "HelveticaNowDisplay-Thin";
  font-size: 44pt;
  margin-bottom: 50px;
  color: #036a8c;
}

.doacash-app__first-landing-container,
.doacash-app__main-container {
  transition: 2s;
}

.visible {
  visibility: visible;
  /* display: block; */
  opacity: 1;
  transition: opacity 2s linear;
}

.hidden {
  visibility: hidden;
  /* display: none; */
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
  /* margin-top: 60px; */
}

@font-face {
  font-family: "PlayfairDisplay-RegularItalic";
  src: url("./assets/fonts/Playfair_Display/PlayfairDisplay-RegularItalic.ttf");
}

@font-face {
  font-family: "HelveticaNowDisplay-Light";
  src: url("./assets/fonts/Helvetica_Now/Helvetica_Now_Display/HelveticaNowDisplay-Light.otf");
}

@font-face {
  font-family: "HelveticaNowDisplay-Medium";
  src: url("./assets/fonts/Helvetica_Now/Helvetica_Now_Display/HelveticaNowDisplay-Medium.otf");
}

@font-face {
  font-family: "HelveticaNowDisplay-Thin";
  src: url("./assets/fonts/Helvetica_Now/Helvetica_Now_Display/HelveticaNowDisplay-Thin.otf");
}

@font-face {
  font-family: "HelveticaNowDisplay-ThinIta";
  src: url("./assets/fonts/Helvetica_Now/Helvetica_Now_Display/HelveticaNowDisplay-ThinIta.otf");
}
</style>
