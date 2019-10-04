<template>
  <div class="blogs">
      <h2> {{ blogTitle}} </h2>

      <input v-model="searchQuery" />
      <button @click="changeTitle" >Chenge Title</button>

      <div v-for="post in filterPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body | snippet }}</p>
      </div>

  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';

Vue.filter('snippet', val => val.slice(50).concat('...'))

export default {
  name: 'Blogs',
  data() {
    return {
      posts: [],
      blogTitle: 'My BLOG !!',
      searchQuery: '',
    }
  },
  computed: {
    filterPosts() {
      return this.posts.filter(post => post.title.match(this.searchQuery))
    },
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
