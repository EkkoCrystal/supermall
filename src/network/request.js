import axios from "axios";

export function request(config){
    const instance = axios.create({
        baseURL: 'http://liulongbin.top:3005/api',
        timeout: 5000
    })
    // 访问
    instance.interceptors.request.use(config =>{
        return config
    },err => {
        err
    })
    // 响应
    instance.interceptors.response.use(res =>{
        return res.data
    },err =>{
        console.log(err);
    })

    return instance(config) // 返回的是promise，可以直接调用后使用.then或者catch
}