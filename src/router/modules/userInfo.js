
export default {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('@/views/userInfo/index'),
    hidden: true,
    // component:Layout,
    children: [
        { path: '', redirect: '/userInfo/userInfoContent' },
        {
            path: '/userInfoContent',
            name: 'userInfoContent',
            component: () => import('@/views/userInfo/userInfoContent'),
            hidden: true
        },
        {
            path: '/userInfoEdit',
            name: 'userInfoEdit',
            component: () => import('@/views/userInfo/userInfoEdit'),
            hidden: true
        }
    ]
}
