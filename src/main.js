
import Vue from 'vue'

//引入vue-router
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';

import router from './router.js'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import {Header ,Swipe, SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import app from './App.vue'
import moment  from 'moment'
/**
 * 时间过滤器
 */
Vue.filter('dateFormat',function(data,patten='YYYY-MM-DD HH:mm:ss'){
   return moment(data).format(patten)
})
let vm = new Vue({
    el:"#app",
    render:c => c(app),
    router
})