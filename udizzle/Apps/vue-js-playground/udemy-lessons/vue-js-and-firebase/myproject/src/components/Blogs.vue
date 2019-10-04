<template>
  <div class="blogs">
      <h2> {{ blogTitle}} </h2>
      <button @click="changeTitle" >Chenge Title</button>
      <div v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Blogs',
  data() {
    return {
      posts: []
    }
  },
  methods: {
    changeTitle() {
      this.blogTitle = 'WooHoo!! Blog Title Updated'
    },
  },
  created() {    
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        this.posts = response.data;
      }).catch(e => console.log(e))

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.blogs {
  margin: 2px;
  background-color: #fff;
}

</style>
