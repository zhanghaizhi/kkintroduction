<template>
	<div id="experience">
		<div id="banner">
			<kswiper :imgdata="imgdata"></kswiper>
		</div>
	</div>
</template>
<script>
	import kswiper from './../components/swiper';
	export default{
		data(){
			return {
				imgdata:['/static/banner1.jpg','/static/banner2.jpg']
			}
		},
		components:{
			kswiper
		}
	}
</script>
<style scoped>
	#experience{
		width:100%;
		height:auto;
	}
	#banner{
		width:100%;
		height:409px;
	}
</style>