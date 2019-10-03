<template>
  <div class="blogs">
      <h2> {{ blogTitle}} </h2>
      <button @click="changeTitle" >Chenge Title</button>
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  data() {
    return {
      blogTitle: 'Blogs'
    }
  },
  methods: {
    changeTitle() {
      this.blogTitle = 'WooHoo!! Blog Title Updated'
    },
  },
  beforeCreate() {
    alert('beforeCreate Hook for Blogs')
  },
  created() {
    alert('created Hook for Blogs')
  },
  beforeUpdate() {
    alert('beforeUpdate Hook for Blogs')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.blogs {
  margin: 2px;
  background-color: aqua;
}

</style>
