<template>
    <div>
        <AppHeader></AppHeader>
        <div class="ui container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
    name: 'app',
    components : {
        AppHeader
    },
}
</script>

<style scoped>

</style>>

</style>