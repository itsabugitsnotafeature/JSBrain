<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message"> New Message (hit Enter to add)</label>
            <input type="text" name="new-message" v-model="newMessage">
        </form>

    </div>
</template>

<script>

export default {
    name: 'NewMessage',
    data () {
        return {
            newMessage: null
        }
    },
    methods: {
        addMessage () {
            console.log(this.newMessage + this.name + Date.now() )
        }
    },
    props: ['name']
}
</script>

<style scoped>

</style>