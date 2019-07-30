<template>
    <div>
        <!--  轮播图区域 -->
        <swiper :lunboList = 'lunboList' :isfull='true'></swiper>
        <!-- 内容区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link  to="/home/newsList">
                            <img src="../../images/homeImages/news.png" >
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link  to="/home/photoList">
		                   <img src="../../images/homeImages/图片分享.png" >
		                    <div class="mui-media-body">图片分享</div></router-link ></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/goodsList">
		                   <img src="../../images/homeImages/商品.png" >
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/homeImages/留言反馈.png" >
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/homeImages/视频专区.png" >
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="../../images/homeImages/联系我们.png" >
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    </div>
</template>
<script>
import Swiper from '../../subcomponents/Swiper.vue'
export default {
    
    data(){
        return {
            lunboList:[]
        }
    },
    components:{
        Swiper
    },
    created(){
        this.getlunbo()
    },
    methods:{
        getlunbo:function(){
            this.$http.get("api/getlunbo").then(result => {
                this.lunboList = result.data.message
              
            })
        }
    }
}
</script>

<style scoped>


</style>
<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    background-color: #fff;
    border:0 
}
img{
        width:60px;
        height:60px
    }
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size:12px
}
</style>
