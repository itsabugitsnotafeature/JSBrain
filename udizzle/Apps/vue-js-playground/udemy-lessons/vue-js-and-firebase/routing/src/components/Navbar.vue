<template>
  <div class="hello">
    <ul>
      <li> <router-link :to="{name: 'Home'}"> Home </router-link> </li>
      <li> <router-link :to="{name: 'About'}"> About </router-link> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  padding: 0px;
}

a {
  color: #42b983;
}
</style>
