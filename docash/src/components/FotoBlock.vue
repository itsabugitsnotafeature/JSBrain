<template>
  <div class="docash-fotoblock">
    <div class="docash-fotoblock__module row">
      <div class="col s12 m6 l6">
        <img class="docash-fotoblock__module-img materialboxed" :src="photo1" />
      </div>
      <div v-if="photo2" class="col s12 m6 l6">
        <img class="docash-fotoblock__module-img materialboxed" :src="photo2" />
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
  },
  mounted() {
    this.mediaElement = document.querySelectorAll(".materialboxed");

    // eslint-disable-next-line no-undef
    this.mediaElement.forEach(element => {
      // eslint-disable-next-line no-undef
      M.Materialbox.init(element, {});
    });
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
