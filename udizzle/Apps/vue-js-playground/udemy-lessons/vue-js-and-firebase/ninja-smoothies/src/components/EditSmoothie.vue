<template>
  <div class="edit-smoothie container">
    <h2 v-if="smoothie">Edit {{ smoothie.title }} Smoothie</h2>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: null
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
  }
};
</script>

<style scoped>
</style>