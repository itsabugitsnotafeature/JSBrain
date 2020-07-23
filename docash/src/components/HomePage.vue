<template>
  <div class="doacash-homepage">
    <img :src="getRandomPic()" />

    <img src="static/2.jpeg" />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {},
  data () {
    return {
      picLow: 1,
      picHigh: 39,
      picPathPrefix: 39
    }
  },
  methods: {
    getRandomPic () {
      // return "img/2.264f1406.jpeg";
      return 'static/2.jpeg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
