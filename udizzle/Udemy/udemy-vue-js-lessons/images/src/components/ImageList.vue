<template>
    <div>
        <div v-if="isLoggendIn" class="image-container">
            <img v-for="image in allImages" :src="image.link" :key="image.id"/>
        </div>
        <h2 v-else> Please Log In To Get Started !</h2>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',
    methods: mapActions(['fetchImages']),
    computed: mapGetters(['allImages', 'isLoggendIn']),
    created() {
        this.fetchImages();
    }
}
</script>

<style scoped>
.image-container {
    column-count: 3;
    column-gap: 0;
}

img {
    max-width: 100%;
    padding: 5px;
}

</style>