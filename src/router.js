import VueRouter from 'vue-router'


import Account from './components/Account.vue'
import GoodList from './components/GoodList.vue'

// 引入Account的子组件
import login from './subcomponents/login.vue'
import register from './subcomponents/register.vue'

let router = new VueRouter({
    routes:[
        { path:'/Account',
        component:Account,
        children:[
            {path:'login',component:login},
            {path:'register',component:register}
        ]    
    } ,
        { path:'/GoodList',component:GoodList}
    ]
})

export default router