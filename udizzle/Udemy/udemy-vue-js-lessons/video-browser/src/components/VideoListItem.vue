<template>
    <li class="list-group-item media" @click="onVideoSelect">
        <img class="mr-3" :src="thumbnailUrl" />
        <div class="media-body">
            {{videoListItem.snippet.title}}
        </div>
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    props: ['videoListItem'],
    computed: {
        thumbnailUrl() {
            return this.videoListItem.snippet.thumbnails.default.url;
        },
    },
    methods: {
        onVideoSelect() {
            this.$emit('videoSelect', this.videoListItem);
        }
    },
}
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
    }
    li:hover {
        background-color: #eee;
    }
</style>