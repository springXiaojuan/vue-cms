<template>
  <div class="shopcar-container">
    <div v-if="isShow">
        <div  class="mui-card"  v-for="(item, index) in goodsList" :key="index" >
      <div class="mui-card-content">
        <div class="mui-card-content-inner" >
          <mt-switch v-model="$store.getters.getSeleted[item.id]" 
          @change="getChangeSelect(item.id,$store.getters.getSeleted[item.id])"></mt-switch>
          <img :src="item.thumb_path" />
          <div class="info">
            <h3>{{item.title}}</h3>
            <p>
              <span class="price">$ {{item.sell_price}}</span>&nbsp;
              <numberbox :count="$store.getters.getCartCount[item.id]" :id="item.id"></numberbox>&nbsp;
              <a href="#" @click="remove(item.id)">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner sum">
            <div>
                <p>总计(不含运费) </p>
                <p>已勾选商品<span class="count">{{$store.getters.getTotal['count']}}</span>件，总价¥<span class="total">{{$store.getters.getTotal['sum']}}</span>元</p>
            </div>
            <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numberbox from "../../subcomponents/shopcar_number.vue";
export default {
  data() {
    return {
      goodsList: [],
      isShow:false
    };
  },
  components: {
    numberbox
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      let ids = [];
      this.$store.state.cart.forEach(item => {
        ids.push(item.id);
      });
      if (ids.length <= 0) {
          this.isShow = false
        return;
      }
      this.$http.get("api/goods/getshopcarlist/" + ids.join(",")).then(rep => {
        this.goodsList = rep.data.message;

            this.isShow = true
       
        console.log(this.isShow)
      });
    },
    remove(id){
        this.$store.commit('removeItem',id)

        this.getGoodsList()
    },
    getChangeSelect(id,val){
        this.$store.commit('updateSelected',{id,selected:val})
    }
  }
};
</script>

 <style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .mui-card-content-inner {
    display: flex;
    align-items: center;
  }
  img {
    width: 60px;
    height: 60px;
  }
  .info {
    h3 {
      font-size: 13px;
    }
    p {
      display: flex;
      justify-content: space-between;
      padding: 5px;
    }
  }
  .sum{
      display: flex;
      justify-content: space-between;
      .count{
          color: red;
          font-weight: bold;
      }
      .total{
          color: red;
          font-weight: bold;
      }
  }
}
</style>

