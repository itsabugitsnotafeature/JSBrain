<template>
  <div class="docash-fotoblock">
    <div class="docash-fotoblock__module row">
      <div class="col s12 m6 l6">
        <img class="docash-fotoblock__module-img" :src="photo1" />
      </div>
      <div v-if="photo2" class="col s12 m6 l6">
        <img class="docash-fotoblock__module-img" :src="photo2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FotoBlock",
  props: {
    photo1: null,
    photo2: null
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.docash-fotoblock__module-img {
  object-fit: cover;
  width: 100%;
  padding: 6%;
  max-height: 55vh;
}

.docash-fotoblock__module {
  height: 60vh;
  margin: 40px 0;
}
</style>
