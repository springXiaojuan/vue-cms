<template>
    <div class="app-container">
        <!-- header -->
        
        <header id="header" class="mui-bar mui-bar-nav">
			<!-- <a class="mui-icon mui-icon-left-nav mui-pull-left"></a> -->
            <div class="textline">
                <span @click="goBack" v-show="isShow">返回</span>
			    <h1 class="mui-title">资讯购物商城</h1>
            </div>
		</header>
        <!-- <mt-header fixed title="固定在顶部"></mt-header> -->
        <!-- container -->
    
        <transition>
           <router-view></router-view>
        </transition>
            
        <!-- tabBar -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-xxj" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-xxj" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-xxj" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge" >{{ $store.getters.getcarAll }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-xxj" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
import goodsInfo from './components/goods/goodsInfo.vue'
export default {
    data(){
        return{
            isShow:false
        }
    },
    created(){
        this.isShow = this.$route.path === '/home' ? false :true
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        count(data){
            console.log(" ==== " + data)
        }
    },
    watch: {
        '$route.path':function(newVal){
            if(newVal === '/home'){
                this.isShow = false
            } else {
                this.isShow = true
            }
        }
    },
    
}
</script>

<style  lang="scss" scoped>
.app-container{
    padding-top: 44px;
    overflow-x: hidden;
    padding-bottom: 50px;
    .textline{
        span{
            text-align: left;
            line-height: 45px;
        }

    }
}
.v-enter{
    opacity: 0;
    transform: translateX(100%)
}
.v-leave-to{
     opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,.v-leave-active{
    transition: all 0.5s ease
}

 .mui-bar-tab .mui-tab-item-xxj.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-xxj {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-xxj .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
} 
.mui-bar-tab .mui-tab-item-xxj .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}


</style>
