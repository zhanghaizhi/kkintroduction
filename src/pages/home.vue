<template>
	<div id="home">
		<div id="banner">
			<kswiper :imgdata="imgdata"></kswiper>
		</div>
		<el-row :gutter="10">
		  <el-col :xs="24" :sm="8" :md="8"  :lg="8" >
		  		<div class="grid-content green">1111</div>
		  </el-col>
		  <el-col :xs="24" :sm="16" :md="16"  :lg="16" >
		  <div class="grid-content bg-purple-light">
		  	<img src="/static/timg.jpg">
		  </div>

		  </el-col>
		</el-row>

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
	#home{
		width:100%;
		height:auto;
		overflow-x: hidden;
	}
	#banner{
		width:100%;
		/*height:409px;*/
		margin-bottom: 20px;
	}
	.el-col {
	    border-radius: 4px;
	}
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .bg-purple-light img{
	  	width:100%;
	  	display: block;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	    height:100%;
	  }
	  .green{
	  	background: #daf28c;
	  	padding:30px 0px;
	  }
	  .el-col{
	  	height:100%;
	  }
	  .el-row{
	  	background: #daf28c;
	  }
</style>