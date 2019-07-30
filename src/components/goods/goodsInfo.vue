<template>
    <div class="goodsInfo-container"> 
       <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        >
          <div class="ball" v-show="ballShow" ref="ball"></div>
       </transition>

       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <swiper :lunboList="lunbolist" :isfull='false'></swiper>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-header">{{goodsInfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
                            市场价：<del>$ {{goodsInfo.market_price}}</del>&nbsp;&nbsp;
                            销售价：<span class="sell_price">$ {{goodsInfo.sell_price}}</span>
                        </p>
                        <p class="purcase">购买数量:<numbox @getCount="getSelectedCount" :max="goodsInfo.stock_quantity"></numbox></p>
                        <p>
                            <mt-button type="primary" >立即购买</mt-button>
                            <mt-button type="danger" @click="addToShopcar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsInfo.goods_no}}</p>
                        <p>库存清苦：{{goodsInfo.stock_quantity}}</p>
                        <p>上架时间：{{goodsInfo.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type='primary' size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                     <mt-button type='danger' size="large" plain @click="goComment(id)">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>

<script>
import swiper from '../../subcomponents/Swiper.vue'
import numbox from '../../subcomponents/numbox.vue'


export default {
    data(){
        return {
            id:this.$route.params.id,
            lunbolist:[],
            goodsInfo:{},
            ballShow: false,
            selectedCount: 1
        }
    },
    components:{
        swiper,
        numbox
    },
    created() {
        this.getLunbo()
        this.getGoodsInfo()
    },
    methods: {
        getLunbo(){
            this.$http.get('api/getthumimages/' + this.id).then(rep => {
                rep.data.message.forEach(item => {
                    item.img = item.src
                });
                this.lunbolist = rep.data.message
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/' + this.id).then(rep => {
                this.goodsInfo = rep.data.message[0]
            })
        },
        goDesc(id){
            this.$router.push({name:'goodsDesc',params:{id}})
        },
        goComment(id){
           this.$router.push({name:'goodscomment',params:{id}})
        },
        addToShopcar(){
            this.ballShow = !this.ballShow

            let info = {id:this.id,price:this.goodsInfo.sell_price,count:parseInt(this.selectedCount),selected:true}
            this.$store.commit('carInfo',info)
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el,done){
            el.offsetWidth;
            
            let ballPosition =  this.$refs.ball.getBoundingClientRect()
            let badgePosition = document.getElementById('badge').getBoundingClientRect()
            let XDista = badgePosition.left - ballPosition.left
            let YDist = badgePosition.top -  ballPosition.top
            el.style.transform = `translate(${XDista}px,${YDist}px)`
            el.style.transition  = "all 1s cubic-bezier(.4,-0.3,1,.68)"
            done()
        },
        afterEnter(el){
            this.ballShow = !this.ballShow
        },
        getSelectedCount(count){
            this.selectedCount = count;
        }


    }
}
</script>

<style lang="scss" scoped>

.goodsInfo-container{
    background-color: #eee;
    overflow: hidden;
    .sell_price{
        font-size: 16px;
        font-weight: 500;
        color: red
    }
    .purcase{
        display: flex;
        line-height: 35px;
    }
    
    .mui-card-footer {
        display: block;
        button{
               margin: 15px 0; 
            }
    }
    .ball{
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        z-index: 99;
        top:397px;
        left:138px;
      
    }
}

</style>
