<template>
  <div class="doacash-homepage">
    <div class="doacash-homepage__background">
      <img :src="getRandomPic()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {},
  data() {
    return {
      picLow: 1,
      picHigh: 39,
      picPathPrefix: 39
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
