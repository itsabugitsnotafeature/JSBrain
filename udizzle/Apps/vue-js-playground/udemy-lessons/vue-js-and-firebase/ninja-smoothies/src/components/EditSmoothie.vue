<template>
  <div class="edit-smoothie container">
    <h2 v-if="smoothie">Edit {{ smoothie.title }} Smoothie</h2>

    <!-- Smoothie form -->
    <form v-if="smoothie" @submit.prevent="editSmoothie">
      <div class="field title">
        <!-- Smoothie Title Section -->
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="smoothie.title">

        <!-- Added ingrediants -->
        <div v-for="(ing, index) in smoothie.ingrediants" :key="index" class="field">
          <label for="ingredient">ingredient: </label>
          <input type="text" name="ingredient" v-model="smoothie.ingrediants[index]">
          <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
        </div>

        <!-- Ingredeintes Section -->
        <div class="field add-ingredient">
          <label for="add-ingredient">Add an ingredient:</label>
          <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another" >
        </div>

        <!-- Add Smoothie Button -->
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn pink">Update Smoothie</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from 'slugify'

export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: null,
      another: null,
      feedback: null
    };
  },
  created() {
    const ref = db
      .collection("smoothies")
      .where("slug", "==", this.$route.params.smoothie_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        //   console.log(doc.data())
        this.smoothie = doc.data();
        this.smoothie.id = doc.id;
      });
    });
  },
  methods: {
    editSmoothie () {
      // console.log(this.smoothie.title, this.ingrediants);
      if (this.smoothie.title) {
        this.feedback = null
        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })

        // console.log(this.slug)

        db.collection('smoothies').doc(this.smoothie.id).update({
          title: this.smoothie.title,
          ingrediants: this.smoothie.ingrediants,
          slug: this.smoothie.slug
        }).then(() => {
          this.$router.push({name: 'Index'})
        }).catch(e => console.log(e))

      } else {
        this.feedback = 'You must enter a smoothie title !'
      }
    },
    addIng () {
      if (this.another) {
        this.smoothie.ingrediants.push(this.another)
        this.another = null
        this.feedback = null
      }
      else {
        this.feedback = 'You must add a value to add to ingrediants'
      }
    },
    deleteIng (ing) {
      this.smoothie.ingrediants = this.smoothie.ingrediants.filter(ingrediant => ingrediant !== ing)
    }
  }
};
</script>

<style scoped>
.edit-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.edit-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}

.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}

.edit-smoothie .delete {
   position: absolute;
   right: 0;
   bottom: 16px;
   color: #aaa;
   font-size: 1.4em;
   cursor: pointer;
}

</style>