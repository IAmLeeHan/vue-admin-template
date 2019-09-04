
export default {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine/index'),
    hidden: true,
    // component:Layout,
    children: [
        { path: '', redirect: '/mine/mineDefault' },
        {
            path: 'mineDefault',
            name: 'mineDefault',
            component: () => import('@/views/mine/default'),
            hidden: true
        },
        {
            path: 'hasEnterprise',
            name: 'hasEnterprise',
            component: () => import('@/views/mine/hasEnterprise'),
            hidden: true
        },
        {
            path: 'myAppDetail/:appId&:orgAppId',
            name: 'myAppDetail',
            component: () => import('@/views/mine/myAppDetail'),
            hidden: true
        },
        {
            path: 'userManage/:id',
            name: 'userManage',
            component: () => import('@/views/mine/userManage'),
            hidden: true
        },
        {
            path: 'userApplyManage/:id',
            name: 'userApplyManage',
            component: () => import('@/views/mine/userApplyManage'),
            hidden: true
        }
    ]
}
