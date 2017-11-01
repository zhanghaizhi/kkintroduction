<template>
	<div id="life">
		<div id="container"></div>
	</div>
</template>
<script>
	export default{
		mounted(){
			this.loadmap()
		},
		components:{
		},methods:{
			loadmap(){
				 var map = new AMap.Map('container',{
		            resizeEnable: true,
		            zoom: 13,
		            center: [116.312654,40.122406]
		        });
				AMap.plugin(['AMap.ToolBar','AMap.AdvancedInfoWindow'],function(){
				    //创建并添加工具条控件
				    var toolBar = new AMap.ToolBar();
				    map.addControl(toolBar);
				    //创建高级信息窗体并在指定位置打开
				    var infowindow = new AMap.AdvancedInfoWindow({
				      content: '<div class="info-title">高德地图</div><div class="info-content">'+
				            '<img src="http://webapi.amap.com/images/amap.jpg">'+
				            '高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。<br>'+
				            '<a target="_blank" href="http://mobile.amap.com/">点击下载高德地图</a></div>',
				      offset: new AMap.Pixel(0, -30)
				    });
				    infowindow.open(map,[116.480983, 39.989628]);
				}) 
			}
		}
	}
</script>
<style scoped>
	#life{
		width:100%;
	}
	#container{
		width:500px;
		height:500px;
		margin:50px;
	}
</style>