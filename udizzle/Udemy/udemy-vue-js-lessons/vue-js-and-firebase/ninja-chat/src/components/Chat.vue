<template>
    <div class="chat container">
        <h2 class="center teal-text">Ninja Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{message.name}}</span>
                        <span class="grey-text text-darken-3">{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </li>
                </ul>
            </div>

            <div class="card-action">
                <NewMessage :name="name" />
            </div>
        </div>

    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from "@/firebase/init"
import moment from 'moment'

const DB_TOPIC_NAME =  'messages'

export default {
    name: 'Chat',
    props: ['name'],
    components: {NewMessage},
    data () {
        return {
            messages: []
        }
    },
    created() {
        const ref = db.collection(DB_TOPIC_NAME).orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            // console.log(snapshot.docChanges())
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added') {
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll'),
                    })
                }
            });
        })
    }
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
    font-size: 0.8 em;
}

.messages {
    max-height: 300px;
    overflow: auto;

}
</style>