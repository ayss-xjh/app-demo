import request from '../utils/request.js'

// 登录请求
export const login = data => request({
    method: 'POST',
    url: '/login',
    data
})

// 注册请求
export const enroll = data => request({
    method: 'POST',
    url: '/enroll',
    data
})

// 测试请求
export const test = data => request({
    method: 'get',
    url: '/test',
    data
})