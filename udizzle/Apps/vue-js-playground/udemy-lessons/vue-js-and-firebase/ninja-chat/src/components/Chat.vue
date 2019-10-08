<template>
    <div class="chat">
        <h2 class="center teal-text"> Ninja Chat </h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li class=" ">
                        <span class="teal-text">Name</span>
                        <span class="grey-text text-darken-3">message</span>
                        <span class="grey-text time">time</span>
                    </li>
                </ul>
            </div>

            <div class="card-action">
                <input type="text">
                <NewMessage :name="name"/>
            </div>
        </div>

    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'

export default {
    name: 'Chat',
    data () {
        return {

        }
    },
    props: ['name'],
    components: {NewMessage}
}
</script>


<style scoped>
.chat h2{
    font-size: 2.6em;
    margin-bottom: 40px;
}

.chat span {
    font-size: 1.4em;
}

.chat .time {
    display: block;
    font-size: 1.2 em;
}
</style>