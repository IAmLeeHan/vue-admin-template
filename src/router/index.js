import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from './modules/login'
import applying from './modules/applying'
import register from './modules/register'
import userInfo from './modules/userInfo'
import home from './modules/home'
import product from './modules/product'
import service from './modules/service'
import solution from './modules/solution'
import contact from './modules/contact'
import enterprise from './modules/enterprise'
import news from './modules/news'
import findpassword from './modules/findpassword'
import resetPassword from './modules/resetPassword'
import mine from './modules/mine'
import appshop from './modules/appshop'
import managecenter from './modules/managecenter'
import newscenter from './modules/newscenter'
import spending from './modules/spending'
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            hidden: true
            // component:Layout,
        },
        login,
        applying,
        register,
        userInfo,
        home,
        product,
        service,
        solution,
        contact,
        enterprise,
        news,
        findpassword,
        resetPassword,
        mine,
        appshop,
        managecenter,
        newscenter,
        spending,
        {
            path: '/404',
            component: () => import('@/views/404'),
            hidden: true
        },
        { path: '*', redirect: '/404', hidden: true }
    ]

})
