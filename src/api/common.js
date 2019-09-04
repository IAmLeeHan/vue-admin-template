import request from '@/utils/request'
//* 获取手机验证码
export function getPhoneCode(data) {
    return request({
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/common/phonecode/send',
        method: 'post',
        data
    })
}

//*验证手机号
export function verifyPhoneCode(data) {
  return request({
      headers: {
          'Content-Type': 'application/json'
      },
      url: '/common/phonecode/verify',
      method: 'post',
      data
  })
}