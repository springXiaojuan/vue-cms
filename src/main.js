
import Vue from 'vue'

//引入vue-router
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueX from 'vuex'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueX)
Vue.http.options.root = 'http://www.liulongbin.top:3005';

import router from './router.js'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// import {Header ,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

// import MintUi from 'mint-ui'
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import app from './App.vue'
import moment  from 'moment'
// import vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
/**
 * 时间过滤器
 */
Vue.filter('dateFormat',function(data,patten='YYYY-MM-DD HH:mm:ss'){
   return moment(data).format(patten)
})

// 从本地存储中取数据
let cart = JSON.parse(localStorage.getItem('cart')) || []

let store = new VueX.Store({
   state:{
      cart:cart
   },
   mutations:{
      carInfo(state,info){
         let falg = false
         state.cart.some(item  => {
            if(item.id === info.id){
               item.count  += parseInt(info.count)
               falg = true
               return true
            }
         })
         if(!falg){
            state.cart.push(info)
         }
         localStorage.setItem('cart',JSON.stringify(state.cart))
      },
      updateGoodsInfo(state,info){
         state.cart.some(item => {
            if(item.id === info.id){
               item.count = parseInt(info.count)
               return true
            }
         })
         localStorage.setItem('cart',JSON.stringify(state.cart))
      },
      removeItem(state,id){
         state.cart.forEach((item,i) => { 
            if(item.id === id){
               state.cart.splice(i,1)
            }
         })
         localStorage.setItem('cart',JSON.stringify(state.cart))
      },
      updateSelected(state,info){
         state.cart.forEach(item => {
            if(item.id === info.id){
               item.selected = info.selected
            }
         })
         localStorage.setItem('cart',JSON.stringify(state.cart))
      }
   },
   getters:{
      getcarAll(state){
         let count  =  0
         state.cart.forEach ( item  => {
            count += item.count
            
         })
         return count
      },
      getCartCount(state){
         let o  = {}
         state.cart.forEach(item => {
            o[item.id] = item.count
         })
         return o
      },
      getSeleted(state){
         let o = {}
         state.cart.forEach(item => {
            o[item.id] = item.selected
         })
         return o
      },
      getTotal(state){
         let o = {
            count : 0,
            sum : 0
         }
         state.cart.forEach(item => {
            if(item.selected){
               o.count += item.count
               o.sum += item.count * item.price
            }
         })
         return o
      }
   }
})


let vm = new Vue({
    el:"#app",
    render:c => c(app),
    router,
    store
})