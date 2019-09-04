import request from '@/utils/request'

// export function login(data) {
//     return request({
//         url: '',
//         method: 'post',
//         data
//     })
// }
//*获取用户信息
export function getMemberInfo() {
    return request({
        url: '/member/center/info',
        method: 'post',
        // params: { token }
    })
}

// export function logout() {
//     return request({
//         url: '',
//         method: 'post'
//     })
// }

//*验证手机号是否被注册
export function verifyPhoneRegistered(data) {
  return request({
      url: '/member/center/check/registered/phone',
      method: 'post',
      data
      // params: { token }
  })
}

//*更换手机号
export function changePhone(data) {
  return request({
      url: '/member/center/modify/phone',
      method: 'post',
      data
      // params: { token }
  })
}

//*发送邮箱验证码
export function sendEmailCode(data) {
  return request({
      url: '/member/center/modify/sendEmail',
      method: 'post',
      data
      // params: { token }
  })
}

//*判断邮箱是否被注册
export function emailRegistered(data) {
  return request({
      url: '/member/center/check/registered/email',
      method: 'post',
      data
      // params: { token }
  })
}

//*绑定新邮箱
export function newEmailChange(data) {
  return request({
      url: '/member/center/modify/email',
      method: 'post',
      data
      // params: { token }
  })
}