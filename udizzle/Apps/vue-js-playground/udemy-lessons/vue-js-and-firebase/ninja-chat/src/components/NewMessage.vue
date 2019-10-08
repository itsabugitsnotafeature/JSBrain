<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New message (enter to add):</label>
      <input type="text" name="new-message" v-model="newMessage" />

      <!-- Feedback Element -->
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "NewMessage",
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        // console.log(this.newMessage + this.name + Date.now() )

        db.collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timeStamp: Date.now()
          })
          .catch(e => console.error(e));
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a message in orde to send one!";
      }
    }
  },
  props: ["name"]
};
</script>

<style scoped>
</style>