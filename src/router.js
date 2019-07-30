import VueRouter from 'vue-router'
/**
 * tabbar
 */

import home from './components/tabbar/Home.vue'

import member from './components/tabbar/Member.vue'

import search from './components/tabbar/Search.vue'

import shopcar from './components/tabbar/Shopcar.vue'

/**
 * home
 */
import newsList  from './components/home/newsList.vue'

import newInfo from './components/home/newsInfo.vue'

/**
 * photo
 */
import photoList from './components/photo/photoList.vue'

import photoInfo from './components/photo/photoInfo.vue'

/**
 * goods
 */
import goodsList from './components/goods/goodsList.vue'
import goodsInfo from './components/goods/goodsInfo.vue'
import goodsDesc from './components/goods/goodsdesc.vue'
import goodscomment from './components/goods/goodscomment.vue'

let router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shopcar',component:shopcar},
        {path:'/home/newsList',component:newsList},
        {path:'/home/newsInfo/:id',component:newInfo},
        {path:'/home/photoList',component:photoList},
        {path:'/home/photoInfo/:id',component:photoInfo},
        {path:'/home/goodsList',component:goodsList},
        {path:'/home/goodsInfo/:id',component:goodsInfo,name:'goodsInfo'},
        {path:'/home/goodsdesc/:id',component: goodsDesc,name: 'goodsDesc'},
        {path:'/home/goodscomment/:id',component:goodscomment,name:'goodscomment'}

    ],
    linkActiveClass:'mui-active'
})

export default router