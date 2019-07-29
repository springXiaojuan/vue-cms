import VueRouter from 'vue-router'

import home from './components/tabbar/Home.vue'

import member from './components/tabbar/Member.vue'

import search from './components/tabbar/Search.vue'

import shopcar from './components/tabbar/Shopcar.vue'

let router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shopcar',component:shopcar}
    ],
    linkActiveClass:'mui-active'
})

export default router