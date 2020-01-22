<template>
  <div>
    <nav>
      <ul>
        <li> 
          <a href=""> Home </a>
        </li>
        <li> 
          <a href=""> About </a>
        </li>
        <li> 
          <a href=""> Contact </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      msg: 'Nav Bar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  text-align: center;
}

nav ul {
  padding: 0px;
}

nav li {
  display: inline-block;
  list-style-type: none;
  margin: 10px;
}

</style>
