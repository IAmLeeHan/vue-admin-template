import request from '@/utils/request'
//* 获取应用列表
export function getAppList(data) {
    return request({
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/app/store/applist',
        method: 'post',
        data
    })
}

//*获取应用详情
export function getAppDetail(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/app/details/',
      method: 'post',
      data
  })
}