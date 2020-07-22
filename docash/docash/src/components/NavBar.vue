<template>
  <div class="docash-navbar">
    <h1>Hello Nav Bar</h1>
    <router-link :to="{ name: 'About' }">
      About Link
    </router-link>
    <router-link :to="{ name: 'HomePage' }">
      Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
