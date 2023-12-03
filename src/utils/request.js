import axios from 'axios'
import { useIsVisibleStores } from '../stores/isVisible';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL
})

//请求拦截器，在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
instance.interceptors.request.use(config=>{
    const token = window.localStorage.getItem('token')
    if(token){
        config.headers.Authorization = token
    }
    return config;
});

//响应拦截器
instance.interceptors.response.use((res)=>{
    console.log('res',res)
    if(res.data.code === 401) {
        const isVisibleStores = useIsVisibleStores()
        isVisibleStores.conversion()
    }
    return res.data;
},(error)=>{
    alert(error.message);
    return new Promise();
})

export default instance
