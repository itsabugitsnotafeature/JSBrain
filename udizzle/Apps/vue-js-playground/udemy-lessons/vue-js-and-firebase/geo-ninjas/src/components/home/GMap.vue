<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
  name: 'GMap',
  data(){
    return{
      lat: 53,
      lng: -2
    }
  },
  methods: {
    renderMap(){
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false
      });
    }
  },
  mounted(){
    // Get current user
    let user = firebase.auth().currentUser

    // Get user Geo Location
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos => {
        this.lat = pos.coords.latitude
        this.lng = pos.coords.longitude

        // find the user record
        db.collection('users').where('user_id', '==', user.uid).get()
        .then(snapshot=> {
          snapshot.forEach(doc => {

            // Once user found, update geo cordinates in our DB
            db.collection('users').doc(doc.id).update({
              geolocation: {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
              }
            })
          });
        }).then(()=> {
          this.renderMap()
        })

      }, (err) => {
        console.error('Unable to read user\'s Geo-Location')
        this.renderMap()
      }, {
        maximumAge: 60000,  // Means if there is a past cached geo-location available from the past 60000ms(1h), then use that one
        timeout: 30000  // Means if we are unable to fetch geo location in under 30000ms(30s), Quit!
      })
    }
    // Use default values
    this.renderMap()
  }
}
</script>

<style>
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