<template>
  <div class="doacash-homepage">
    <!-- Landing Carousel -->
    <div class="carousel carousel-slider center doacash-homepage__carousel">
      <!-- Slides -->
      <div class="carousel-item">
        <img class="doacash-homepage__carousel-slide" :src="getRandomPic()" />
      </div>
      <div class="carousel-item">
        <img class="doacash-homepage__carousel-slide" :src="getRandomPic()" />
      </div>
      <div class="carousel-item">
        <img class="doacash-homepage__carousel-slide" :src="getRandomPic()" />
      </div>
      <div class="carousel-item">
        <img class="doacash-homepage__carousel-slide" :src="getRandomPic()" />
      </div>
      <div class="carousel-item">
        <img class="doacash-homepage__carousel-slide" :src="getRandomPic()" />
      </div>
    </div>

    <!-- Media 1 -->
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
    scrollToTop() {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 50);
    },

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
    // BUG BUG BUG => When coming from home page, does not scroll to top;

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

    // Scroll to top at the very end
    this.scrollToTop();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.doacash-homepage__carousel-slide {
  height: 98vh !important;
  object-fit: cover;
}

.doacash-homepage__carousel {
  height: 98vh !important;
  position: absolute;
}
</style>
