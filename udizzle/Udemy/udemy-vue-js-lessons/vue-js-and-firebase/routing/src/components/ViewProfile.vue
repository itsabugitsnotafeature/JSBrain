<template>
  <div class="view-profile">
    <h2>ViewProfile</h2>
    <h3> User ID => {{ userId }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ViewProfile',
  data () {
    return {
      userId: this.$route.params.user_id
    }
  },
  watch: {
    $route: 'updateId'
  },
  methods: {
    updateId () {
      this.userId = this.$route.params.user_id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
