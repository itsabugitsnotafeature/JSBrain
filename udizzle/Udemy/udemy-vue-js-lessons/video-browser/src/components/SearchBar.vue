<template>
    <div>
        <input
            placeholder="Enter Something to Search"
            @input="onInput"
        />
    </div>    
</template>

<script>
export default {
    name: 'SearchBar',
    data: function() {
        return {};
    },
    methods: {
        onInput(event) {
            // console.log(event.target.value);
            this.$emit('termChange', event.target.value);
        }
    },
}
</script>

<style scoped>
    input {
        width: 75%;
    }
    div {
        text-align: center;
        margin: 20px;
    }
</style>