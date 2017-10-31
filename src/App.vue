<template>
  <div id="app">
	<vheader></vheader>
	 <div id="mian"><router-view/></div>
	<!-- <vfooter></vfooter> -->
  </div>
</template>
<script>
import vheader from './components/header';
import vfooter from './components/footer';
export default {
  name: 'app',
  components:{
  	vheader,vfooter
  }
}
</script>

<style>
@import './common.css';
html, body{
	height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height:100%;
  min-height: 600px;
  /*overflow: hidden;*/
}

</style>
