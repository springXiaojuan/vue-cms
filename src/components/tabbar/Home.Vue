<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" :key="item.id">
                <img :src="item.img" />
                <!-- {{item.img}} -->
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/homeImages/news.png" >
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/homeImages/图片分享.png" >
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/homeImages/商品.png" >
		                    <div class="mui-media-body">商品购买</div></a></li>
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

export default {
    data(){
        return {
            lunboList:[]
        }
    },
    created(){
        this.getlunbo()
        console.log(this.lunboList)
    },
    methods:{
        getlunbo:function(){
            this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result => {
                this.lunboList = result.data.message
                console.log(this.lunboList)
                console.log(result.data)
            })
        }
    }
}
</script>

<style scoped>


</style>
<style lang="sass" scoped>
.mint-swipe{
    height: 200px;
    img{
        width: 100%;
        height: 100%;
    }
}
.mui-grid-view.mui-grid-9{
    
    
}
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
