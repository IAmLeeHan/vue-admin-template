
export default {
    path: '/applying',
    name: 'applying',
    component: () => import('@/views/applying/index'),
    hidden: true,
    children: [
        { path: '', redirect: '/applying/applyingType' },
        {
            path: 'applyingType',
            name: 'applyingType',
            component: () => import('@/views/applying/applyingType'),
            hidden: true
        },
        {
            path: 'createEnterprise',
            name: 'createEnterprise',
            component: () => import('@/views/applying/createEnterprise'),
            hidden: true
        },
        {
            path: 'addEnterprise',
            name: 'addEnterprise',
            component: () => import('@/views/applying/addEnterprise'),
            hidden: true
        },
        {
            path: 'applyingFinished',
            name: 'applyingFinished',
            component: () => import('@/views/applying/applyingFinished'),
            hidden: true
        }
    ]
}
