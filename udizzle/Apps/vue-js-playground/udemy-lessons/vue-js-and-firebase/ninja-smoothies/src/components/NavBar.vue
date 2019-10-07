<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link to="">
          <span class="nav-title">Ninja Smoothies </span>
        </router-link>
        <a class="btn-floating btn-large halfway-fab pink">
          <router-link to="">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {}
  }
};
</script>

<style scoped>
.navbar nav {
    padding: 0px 20px;
}
</style>
