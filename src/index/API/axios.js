import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
//axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.timeout = 5000;
// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use((config) => {
    //config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
})

axios.interceptors.response.use((response,err) => {
    console.log(response)
    let data = response.data
    console.log(err)
    switch (data.result) {
        case 1:
            return Promise.reject(new Error('参数错误'))
            break
        case '400':
            return data;
            break
        default:
            return data
    }
},(err)=>{
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误'
                break

            case 401:
                err.message = '未授权，请登录'
                break

            case 403:
                err.message = '拒绝访问'
                break

            case 404:
                err.message = `请求地址出错: ${err.response.config.url}`
                break

            case 408:
                err.message = '请求超时'
                break

            case 500:
                err.message = '服务器内部错误'
                break

            case 501:
                err.message = '服务未实现'
                break

            case 502:
                err.message = '网关错误'
                break

            case 503:
                err.message = '服务不可用'
                break

            case 504:
                err.message = '网关超时'
                break

            case 505:
                err.message = 'HTTP版本不受支持'
                break

            default:
        }
    }

    return Promise.reject(err)
})

export default axios
