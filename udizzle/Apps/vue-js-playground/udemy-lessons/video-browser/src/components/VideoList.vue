<template>
    <ul class="list-group col-md-4">
        <VideoListItem
            v-for="video in videoList"
            :videoListItem="video"
            :key="video.etag"
            @videoSelect="onVideoSelect"
        >
        </VideoListItem>
    </ul>    
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    // props: {
    //     videoList: Array,
    // },
    props: ['videoList'],
    data() {
        return {
        }
    },
    components: {
        VideoListItem,
    },
    methods: {
        onVideoSelect(video) {
            this.$emit('videoSelect', video);
        },
    },
    
}
</script>

<style scoped>

</style>