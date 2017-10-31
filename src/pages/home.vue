<template>
	<div id="home">
		<div id="logoImg">
	        <swiper :options="swiperoptionv" ref="mySwiperv" @mouseenter.native="stopPlayv" @mouseleave.native="startPlayv">
	          <!-- slides -->
	          <swiper-slide>
	            <div class="logoImg1">
	              <div class="currentBanner">
	                <img src="./../assets/logo.png" alt="">
	              </div>
	            </div>
	          </swiper-slide>
	          <swiper-slide>
	            <div class="logoImg2" >
	            </div>
	          </swiper-slide>
	          <!-- Optional controls -->
	          <div class="swiper-pagination swiper-paginationV" slot="pagination"></div>
	        </swiper>
	      </div>
	</div>
</template>
<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	
	export default{
		name:'home',
		data(){
			return {
				swiperoptionv: {
		          pagination: '.swiper-paginationV',
		          autoplay: 3000,
		          loop: true,
		          centeredSlides: true,
		          paginationClickable: true
		        }
			}
		},
		components: {
		    swiper,
      		swiperSlide
		},
		computed: {
			swiperv () {
	        return this.$refs.mySwiperv.swiper
	      }
		},
		methods:{
			stopPlayv () {
	        this.swiperv.stopAutoplay()
	      },
	       startPlayv () {
        this.swiperv.startAutoplay()
      },
		}
	}
</script>
<style scoped>
	#home{
		width:100%;
		height:auto;
	}
	#logoImg{
		width:100%;
		height:409px;
	}
	.swiper-container{
		height:100%;
	}
	#logoImg {
    width: 100%;
    height: 409px;
  }

  .logoImg1 {
    width: 100%;
    height: 409px;
    background: url("./../assets/logo.png") center center no-repeat;
    position: relative;
  }

  .logoImg2 {
    width: 100%;
    height: 409px;
    background: url("./../assets/logo.png") center center no-repeat;
  }

</style>