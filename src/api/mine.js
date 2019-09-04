import request from '@/utils/request'
//* 判断是否已经加入企业
export function testUserAddEnterprise(data) {
    return request({
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/org/basic/check/joined',
        method: 'post',
        data
    })
}
//* 获取我的应用
export function getMyApp(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/select',
      method: 'post',
      data
  })
}

//*添加到我的应用
export function pushMyApp(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/add',
      method: 'post',
      data
  })
}

//*在我的应用移出
export function removeMyApp(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/remove',
      method: 'post',
      data
  })
}

//*添加到快捷方式
export function setShortcutApp(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/add/shortcut',
      method: 'post',
      data
  })
}

//*取消快捷方式
export function removeShortcutApp(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/remove/shortcut',
      method: 'post',
      data
  })
}

//*是否有快捷方式
export function IsShortcutApp(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/isOrNo/shortcut',
      method: 'post',
      data
  })
}

//*应用种类
export function getAppType(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/appType',
      method: 'post',
      data
  })
}

//*申请应用
export function AppApplying(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/apply',
      method: 'post',
      data
  })
}

//*人员管理增加人员
export function manageAddPeople(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/people/add',
      method: 'post',
      data
  })
}

//*人员管理查询
export function manageSearch(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/people/query',
      method: 'post',
      data
  })
}

//*人员管理删除人员
export function manageRemovePeople(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/people/remove',
      method: 'post',
      data
  })
}

//*人员或部门添加权限的阻止架构树
export function AppRuleTree(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/home/tree/people',
      method: 'post',
      data
  })
}
