<template>
    <div class="chat">
        Hello Chat => {{ this.name }}
    </div>
</template>

<script>
export default {
    name: 'Chat',
    data () {
        return {

        }
    },
    props: ['name']
}
</script>


<style scoped>

</style>