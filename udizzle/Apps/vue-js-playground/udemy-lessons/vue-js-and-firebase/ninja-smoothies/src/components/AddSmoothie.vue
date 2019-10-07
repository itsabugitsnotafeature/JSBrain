<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigi-text">Add New Smoothie Recipe</h2>
    <form @submit.prevent="AddSmoothie">
      <div class="field title">
        <!-- Smoothie Title Section -->
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title">
        
        <!-- Ingredeintes Section -->
        <div class="field add-ingredient">
          <label for="add-ingredient">Add an ingredient:</label>
          <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another" @keydown.tab.enter="addIng" >
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
export default {
  name: 'AddSmoothie',
  data () {
    return {
      title: null,
      another: null,
      ingredientes: [],
      feedback: null
    }
  },
  methods : {
    AddSmoothie () {
      console.log(this.title, this.ingredientes);
    },
    addIng () {
      if(this.another) {
        this.ingredientes.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must add a value to add to ingredients'
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
