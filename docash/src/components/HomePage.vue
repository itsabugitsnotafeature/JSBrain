<template>
  <div class="doacash-homepage">
    <!-- Landing Carousel -->
    <div class="carousel carousel-slider center ladytin-homepage__carousel">
      <!-- Slides -->
      <div class="carousel-item">
        <img class="ladytin-homepage__carousel-slide-1" :src="getRandomPic()" />
      </div>
      <div class="carousel-item">
        <img class="ladytin-homepage__carousel-slide-2" :src="getRandomPic()" />
      </div>
      <div class="carousel-item">
        <img class="ladytin-homepage__carousel-slide-3" :src="getRandomPic()" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {},
  data() {
    return {
      carouselSlideTransitionDuration: 250,
      picLow: 1,
      picHigh: 39,
      sliderInterval: 5000
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
  },
  mounted() {
    this.HomePageCarouselElement = document.querySelectorAll(".carousel")[0];

    // eslint-disable-next-line no-undef
    this.HomePageCarouselInstance = M.Carousel.init(
      this.HomePageCarouselElement,
      {
        fullWidth: true,
        indicators: true,
        duration: this.carouselSlideTransitionDuration
      }
    );

    const self = this;

    // Setup Auto Slide Carousel
    this.carouselSliderTimerId = setInterval(() => {
      self.HomePageCarouselInstance.next();
    }, this.sliderInterval);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ladytin-homepage__carousel-slide-1 {
  position: relative;
  bottom: 355px;
}

.ladytin-homepage__carousel-slide-2 {
  position: relative;
  top: 2px;
}

.ladytin-homepage__carousel-slide-3 {
  position: relative;
  bottom: 400px;
}

.ladytin-homepage__carousel {
  height: 98vh !important;
}
</style>
