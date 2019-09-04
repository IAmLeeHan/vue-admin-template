
export default {
    path: '/appshop',
    name: 'appshop',
    component: () => import('@/views/appShop/index'),
    hidden: true,
    // component:Layout,
    children: [
        { path: '', redirect: '/appshop/appInfo' },
        {
            path: 'appInfo',
            name: 'appInfo',
            component: () => import('@/views/appShop/appInfoContent'),
            hidden: true
        },
        {
            path: 'appdetail/:appId',
            name: 'appdetail',
            component: () => import('@/views/appShop/appInfoDetail'),
            hidden: true
        },
        {
            path: 'appBuy/:id',
            name: 'appBuy',
            component: () => import('@/views/appShop/appBuy'),
            hidden: true
        },
        {
            path: 'appBuySuccess/:id',
            name: 'appBuySuccess',
            component: () => import('@/views/appShop/appBuySuccess'),
            hidden: true
        }
    ]
}
