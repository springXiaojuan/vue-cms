<template>
    <div class="goodslist-container">
       <div class="goodsitem" v-for="(item, index) in goodsList" :key="index" @click="getDetail(item.id)">
           <img :src="item.img_url">
           <h3>{{item.title}}</h3>
           <div class="info">
               <p class="price">
                <span class="now">${{item.sell_price}}</span>
                <span class="old">${{item.market_price}}</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩余{{item.stock_quantity}}件</span>
               </p>
           </div>
       </div>
       <mt-button  type='danger' size='large' @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pageindex :1,
            goodsList:[],
            id: this.$route.params.id
        }
    },
    created() {
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            this.$http.get('api/getgoods?pageindex=' + this.pageindex ).then(rep => {
                this.goodsList = this.goodsList.concat(rep.data.message) 
            })
        },
        getMore(){
            this.pageindex ++ 
            this.getGoodsList()
        },
        getDetail(id){
            // this.$router.push('/home/goodsInfo/' + id)

            // named route
            this.$router.push({ name: 'goodsInfo', params: { id: id } })
        }
    }
    
}
</script>

<style lang="scss" scoped>
.goodslist-container{
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
    .goodsitem{
        padding: 2px;
        width: 49%;
        box-shadow: 0 0 3px #ccc;
        margin-bottom: 5px;
        min-height: 265px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3{
            font-size: 16px
        }
        img{
            width: 100%;
        }
        .info{
            background-color: #ccc;
            .price{
                .now{
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                }
                .old{
                    padding-left: 10px;
                    text-decoration: line-through;
                    font-size: 12px;
                }
            }
            .sell{
                margin: 0;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
