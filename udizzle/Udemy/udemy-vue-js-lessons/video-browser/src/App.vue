<template>
    <div class="container ">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo"></VideoDetail>

            <VideoList
            :videoList="videos"
            @videoSelect="onVideoSelect"
        ></VideoList>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const YOUTUBE_API_KEY = 'AIzaSyC8TaFcMeKejMfoV_5KLofhLBbmFE__qBc';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

export default {
    name: 'App',
    data() {
        return {
            videos: [],
            selectedVideo: null,
        };
    },
    components: {
        SearchBar,
        VideoList,
        VideoDetail,
    },
    methods: {
        onTermChange(newVal) {
            // console.log("from parent => " + newVal);
            axios.get(YOUTUBE_URL, {
                params: {
                    key: YOUTUBE_API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: newVal
                }
            }).then((res)=>{
                this.videos = res.data.items;
            });
        },
        onVideoSelect(video) {
            this.selectedVideo = video;
        },
    },
}
</script>