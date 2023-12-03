import request from '../utils/request.js'

export const login = data => request({
    method: 'POST',
    url: '/login',
    data
})

export const enroll = data => request({
    method: 'POST',
    url: '/enroll',
    data
})

export const test = data => request({
    method: 'get',
    url: '/test',
    data
})