<template>
	<div>
    <h1>{{foo}}</h1>
	</div>
</template>
<script>
	export default{
    name:'foo',  
    beforeMount() {
      console.log('foo => BeforeMount Called! ');
    },
		data(){
			return{
				foo:'fooooo  fooooo  fooooo  fooooo  fooooo  fooooo  fooooo  fooooo  fooooo  fooooo  fooooo  '
			}
		}
	}
</script>