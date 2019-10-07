<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigi-text">Add New Smoothie Recipe</h2>
    <form @submit.prevent="AddSmoothie">
      <div class="field title">
        <!-- Smoothie Title Section -->
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title">
        
        <!-- Added ingrediants -->
        <div v-for="(ing, index) in ingrediants" :key="index">
          <label for="ingredient">ingredient: </label>
          <input type="text" name="ingredient" v-model="ingrediants[index]">
        </div>

        <!-- Ingredeintes Section -->
        <div class="field add-ingredient">
          <label for="add-ingredient">Add an ingredient:</label>
          <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another" >
        </div>

        <!-- Add Smoothie Button -->
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>  
          <button class="btn pink">Add Smoothie</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'AddSmoothie',
  data () {
    return {
      title: null,
      another: null,
      ingrediants: [],
      feedback: null,
      slug: null
    }
  },
  methods : {
    AddSmoothie () {
      // console.log(this.title, this.ingrediants);
      if(this.title) {
        this.feedback = null;
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })

        // console.log(this.slug)

        db.collection('smoothies').add({
          title: this.title,
          ingrediants: this.ingrediants,
          slug: this.slug
        }).then(() => {
          this.$router.push({name: 'Idex'})
        }).catch(e => console.log(e))

      } else {
        this.feedback = 'You musht enter a smoothie title !'
      }
    },
    addIng () {
      if(this.another) {
        this.ingrediants.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must add a value to add to ingrediants'
      }
    }
  }
};
</script>

<style scoped>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px  
}

.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto; 
}

.add-smoothie .field {
  margin: 20px auto;
}

</style>
