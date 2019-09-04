
export default {
    path: '/newscenter',
    name: 'newscenter',
    component: () => import('@/views/newsCenter/index'),
    hidden: true,
    redirect:"/newscenter/enterpriseMsg",
    meta:{title:"消息中心"},
    children:[
      {
        path: 'enterpriseMsg',
        name: 'enterpriseMsg',
        component: () => import('@/views/newsCenter/enterpriseMsg/index'),
        hidden: true,
        meta:{title:"企业消息"},
      },
      {
        path: 'appMsg',
        name: 'appMsg',
        component: () => import('@/views/newsCenter/appMsg/index'),
        hidden: true,
        meta:{title:"应用消息"},
      },
      {
        path: 'systemMsg',
        name: 'systemMsg',
        component: () => import('@/views/newsCenter/systemMsg/index'),
        hidden: true,
        meta:{title:"系统消息"},
      },
    ]
}
