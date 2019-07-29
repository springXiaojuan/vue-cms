<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="index">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'> 
                                <span>时间:{{item.add_time | dateFormat}}</span>
                                <span>浏览:{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList:function(){
            this.$http.get('api/getnewslist').then(rep => {
                this.newsList = rep.data.message;
            })
        }
    }
    
}
</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px}
        .mui-ellipsis{
        font-size:12px;
        display: flex;
        justify-content: space-between;
    }
    }
}

</style>
