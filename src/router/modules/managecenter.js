
export default {
    path: '/managecenter',
    name: 'managecenter',
    component: () => import('@/views/manageCenter/index'),
    hidden: true,
    // meta: { title: '管理中心'},
    redirect: '/managecenter/accountManagement/BusineAccount',
    children: [
        {
          path:"accountManagement",
          name:"accountManagement",
          meta:{title:"账户管理"},
          component: ()=> import('@/views/manageCenter/components/accountManagement'),
          children:[
            { path: '', redirect: '/managecenter/accountManagement/BusineAccount' },
            {
                path: 'BusineAccount',
                name: 'BusineAccount',
                component: () => import('@/views/manageCenter/components/accountManagement/BusineAccount/index'),
                hidden: true,
                meta: { title: '企业管理'},
                children:[
                  {path:'',redirect:"/managecenter/accountManagement/BusineAccount/BusineAccountInfo"},
                  {
                  path: 'BusineAccountInfo',
                  name: 'BusineAccountInfo',
                  component: () => import('@/views/manageCenter/components/accountManagement/BusineAccount/BusineAccountInfo/index'),
                  hidden: true,
                  },
                  {
                    path:"prepaid",
                    name:"prepaid",
                    component:() => import('@/views/manageCenter/components/accountManagement/BusineAccount/prepaid/index'),
                    redirect:"/managecenter/accountManagement/BusineAccount/prepaid/preDefault",
                    meta:{title:'充值'},
                    children:[
                      {
                        path:"preDefault",
                        name:"preDefault",
                        component:() => import('@/views/manageCenter/components/accountManagement/BusineAccount/prepaid/prepaid'),
                      },
                      {
                        path:"preSuccess",
                        name:"preSuccess",
                        component:() => import('@/views/manageCenter/components/accountManagement/BusineAccount/prepaid/preSuccess'),
                        meta:{title:"充值成功"}
                      },
                    ]
                  }
                ]
            },
            {
                path: 'orderManagement',
                name: 'orderManagement',
                component: () => import('@/views/manageCenter/components/accountManagement/orderManagement/index'),
                hidden: true,
                meta: { title: '订单管理'},
                children:[
                  {path:'',redirect:"/managecenter/accountManagement/orderManagement/orderManage"},
                  {
                  path: 'orderManage',
                  name: 'orderManage',
                  component: () => import('@/views/manageCenter/components/accountManagement/orderManagement/orderManage'),
                  hidden: true,
                  },
                  {
                    path:'orderDetail/:id',
                    name:'orderDetail',
                    component: () => import('@/views/manageCenter/components/accountManagement/orderManagement/orderDetail'),
                    meta:{title:"订单详情"}
                  }
                ]
            },
          ]
        },
        {
          path:"peopleManage",
          name:"peopleManage",
          meta:{title:"人员管理"},
          component: ()=> import('@/views/manageCenter/components/peopleManage'),
          children:[
            { path: '/managecenter/peopleManage', redirect: '/managecenter/peopleManage/peopleManagement' },
            {
              path: 'peopleManagement',
              name: 'peopleManagement',
              component: () => import('@/views/manageCenter/components/peopleManage/peopleManagement/index'),
              hidden: true,
              meta: { title: '人员管理'},
            },
            {
              path: 'applyManagement',
              name: 'applyManagement',
              component: () => import('@/views/manageCenter/components/peopleManage/applyManagement/index'),
              hidden: true,
              meta: { title: '申请管理'},
            },
            {
              path: 'bulkImport',
              name: 'bulkImport',
              component: () => import('@/views/manageCenter/components/peopleManage/bulkImport/index'),
              hidden: true,
              meta: { title: '批量导入'},
              redirect:"/managecenter/peopleManage/bulkImport/bulkImportModule",
              children:[
                {
                  path:'bulkImportModule',
                  name:'bulkImportModule',
                  component: () => import('@/views/manageCenter/components/peopleManage/bulkImport/bulkImport'),
                },
                {
                  path:"ImportPreview",
                  name:"ImportPreview",
                  component: () => import('@/views/manageCenter/components/peopleManage/bulkImport/ImportPreview'),
                  meta:{title:"导入预览"}
                }
              ]
            },
          ]
        },
        
        {
            path: 'appManagement',
            name: 'appManagement',
            component: () => import('@/views/manageCenter/components/appManagement/index'),
            hidden: true,
            meta: { title: '应用管理'},
            children:[
              {
                path: 'appList',
                name: 'appList',
                component: () => import('@/views/manageCenter/components/appManagement/appManagementList'),
                hidden: true,
                meta: { title: '应用列表'},
                children:[
                  {path: '', redirect: '/managecenter/appManagement/appList/List' },
                  {
                    path: 'List',
                    name: 'List',
                    component: () => import('@/views/manageCenter/components/appManagement/appList'),
                    hidden: true,
                  },
                  {
                    path: 'appListSet',
                    name: 'appListSet',
                    component: () => import('@/views/manageCenter/components/appManagement/appListSet'),
                    hidden: true,
                    meta: { title: '设置'},
                  }
                ]
              }
            ]
        }
    ]
}
