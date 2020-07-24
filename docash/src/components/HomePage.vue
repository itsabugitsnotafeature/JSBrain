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

    <!-- FotoBlock -->
    <!-- <FotoBlock photo1="static/26.jpeg" photo2="static/27.jpeg" /> -->
    <FotoBlock
      v-for="item in imageBlocks"
      v-bind:photo1="item.firstPic"
      v-bind:photo2="item.secondPic"
      v-bind:key="item.imgKey"
    />
  </div>
</template>

<script>
import FotoBlock from "./FotoBlock.vue";

export default {
  name: "HomePage",
  props: {},
  components: {
    FotoBlock
  },
  data() {
    return {
      carouselSlideTransitionDuration: 250,
      picLow: 1,
      picHigh: 59,
      sliderInterval: 5000,
      images: []
    };
  },
  computed: {
    imageBlocks() {
      const imageBlocks = [];
      let i = this.picLow;
      for (; i <= this.picHigh; ) {
        let eachBlock = {};

        if (i === this.picHigh) {
          eachBlock = {
            firstPic: `static/${i}.jpeg`,
            secondPic: null,
            imgKey: i
          };
        } else {
          eachBlock = {
            firstPic: `static/${i}.jpeg`,
            secondPic: `static/${i + 1}.jpeg`,
            imgKey: i
          };
        }

        imageBlocks.push(eachBlock);
        i += 2;
      }
      return imageBlocks;
    }
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
.doacash-homepage__module-img {
  object-fit: cover;
  width: 100%;
  padding: 6%;
  max-height: 55vh;
}

.doacash-homepage__module {
  height: 60vh;
  margin: 40px 0;
}

.doacash-homepage__carousel-slide {
  height: 98vh !important;
  object-fit: cover;
}

.doacash-homepage__carousel {
  height: 98vh !important;
}
</style>
