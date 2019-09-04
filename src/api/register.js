import request from '@/utils/request'

//* 注册用户
export function register(data) {
    return request({
        url: '/member/reg/phone/register',
        method: 'post',
        data
    })
}

