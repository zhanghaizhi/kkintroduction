<template>
	<div id="header" class="hidden-xs-only">
		<div id="nav">
			<el-row>
			    <el-col :span="8"><img class="logo" src="./../assets/logo.png"></el-col>
			    <el-col :span="16">
					<router-link to="/home">首页</router-link>
		            <router-link to="/experience">丰富经历</router-link>
		            <router-link to="/skills">多样技能</router-link>
		            <router-link to="/life">多姿生活</router-link>
		            <router-link to="/projectdemo">项目实例</router-link>
			    </el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style scoped>
	#header{
		width:100%;
		box-shadow: 0 0 19px 2px #dddcdc;
	}
	#nav{
		height:100px;
		width:80%;
		margin: 0 auto;
	}
	#nav .logo{
		display: block;
		height:90px;
		border-radius: 100%;
		margin-top: 5px;
	}
	a {
    text-decoration: none;
    line-height: 100px;
    width: 120px;
    height: 100px;
    text-align: center;
    display: inline-block;
    color: #333333;
    box-sizing: border-box;
  }
  .router-link-exact-active{
  	background: #91b521;
  	color:#fff;
  }
</style>