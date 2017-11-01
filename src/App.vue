<template>
  <div id="app">
	<vheader ></vheader>
    <mheader @tools="changePages"></mheader>
	<div id="main"><router-view/></div>
    <vfooter></vfooter>
    <transition name="slide-show">
        <menutwo v-show="shmenu"></menutwo>
     </transition>
  </div>
</template>
<script>
import vheader from './components/header';
import mheader from './components/mheader';
import vfooter from './components/footer';
import menutwo from './components/menu';
export default {
  name: 'app',
  data(){
    return {
      shmenu:false
    }
  },
  components:{
  	vheader,vfooter,mheader,menutwo
  },
  methods:{
    changePages(type){
      this.shmenu=!this.shmenu;
    },
    changePagess(){
      this.shmenu=false;  
    }
  },
   watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "changePagess"
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
#main{
  /*overflow: scroll;*/
  /*padding-bottom: 300px;*/
  width: 100%
}
.slide-show-enter-active {
  animation: slide-show-in .5s;
}
.slide-show-leave-active {
  animation: slide-show-in .5s reserve;
}
@keyframes slide-show-in {
  0% {
    height:0%;
  }
  100% {
    height:100%;
  }
}
</style>
