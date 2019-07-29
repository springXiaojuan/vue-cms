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

let router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shopcar',component:shopcar},
        {path:'/home/newsList',component:newsList},
        {path:'/home/newsInfo/:id',component:newInfo}
    ],
    linkActiveClass:'mui-active'
})

export default router