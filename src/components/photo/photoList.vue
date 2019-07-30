<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll" >
						<a :class="['mui-control-item' ,item.id == 0 ? 'mui-active' :'' ] " v-for="(item, index) in category" :key="index" @click="getListByCateId(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
        <ul class="photo-list">
            <router-link v-for="(item,index) in photoList" :key="index" :to="'/home/photoInfo/'+item.id" tag="li">
                <img v-lazy="item.img_url"/>
                <div class="info">
                    <div class="info-title">{{item.title}}</div>  
                     <div class="info-body">{{item.zhaiyao}}</div>            
                 </div>
            </router-link>
            
        </ul>
    
    
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
   
export default {
 
    data(){
        return {
            category:[],
            photoList:[]
        }
    },
    created() {
        this.getAllcategory()
        this.getListByCateId(0)
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        })
        
    },
    methods:{
        getAllcategory:function(){
            this.$http.get('api/getimgcategory').then(rep => {
                rep.data.message.unshift({title:"全部",id:0})
                this.category = rep.data.message
            })
        },
        getListByCateId(cateId){
            this.$http.get('api/getimages/' + cateId).then(rep => {
                this.photoList = rep.data.message
                console.log(rep.data.message)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.photo-list{
    list-style: none;
    
    padding: 0;
    margin: 0;
    padding: 10px;
    padding-bottom: 0px;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 6px #999;
        position: relative;
        // padding-bottom: 
        img{
            width: 100%;
            vertical-align: middle;
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info{
            color: #fff;
            position: absolute;
            text-align: left;
            background-color: rgba(0,0,0,0.4);
            bottom: 0;
            max-height: 85px;
            .info-title{
                font-size: 14px
            }
            .info-body{
                font-size: 13px
            }
        }
    }
}


</style>
