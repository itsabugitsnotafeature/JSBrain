<template>
    <div class="map">
        <h2>Map</h2>
        <div class="google-map" id="map"></div>
    </div>    
</template>

<script>
export default {
    name: 'GMap',
    data () {
        return {
            lat: 53,
            lng: -2
        }
    },
    mounted () {
        this.rendermap()
    },
    methods: {
        rendermap() {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: this.lat,
                    lng: this.lng
                },
                zoom: 6,
                maxZoom: 15,
                minZoom: 3,
                steetViewControl: false
            })
        },
    }
}
</script>


<style scoped>
.google-map {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>