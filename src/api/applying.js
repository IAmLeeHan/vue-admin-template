import request from '@/utils/request'
//* 创建企业
export function CreateEnterprise(data) {
    return request({
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/org/basic/check/joined',
        method: 'post',
        data
    })
}