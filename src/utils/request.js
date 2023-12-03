// 引入axios
import axios from 'axios'
// 引入全局Stores isVisible
import { useIsVisibleStores } from '../stores/isVisible';

// 创建axios实例
const instance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL
})

//请求拦截器，在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
instance.interceptors.request.use(config=>{
    // 发送请求前,在请求头中添加token
    const token = window.localStorage.getItem('token')
    if(token){
        config.headers.Authorization = token
    }
    return config
})

//响应拦截器
instance.interceptors.response.use((res)=>{
    if(res.data.code === 401) {
        // 当响应的数据显示未登录时,显示登录/注册对话框
        const isVisibleStores = useIsVisibleStores()
        isVisibleStores.conversion()
    }
    return res.data;
},(error)=>{
    return new Promise()
})

export default instance
