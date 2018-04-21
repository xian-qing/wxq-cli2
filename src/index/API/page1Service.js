import Axios from 'axios';

Axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

export function AxiosGetJSon(reddit) {
    return Axios({
        method: "GET",
        url: `http://www.reddit.com/r/reactjs.json`,
    }).then(response => {
        return response.data.data.children.map((child,idx) => child.data)
    }).catch(e=>{
        console.log(e.message)
    })
}


export function AxiosGetList(reddit) {
    return Axios({
        method: "GET",
        url: `http://www.reddit.com/r/reactjs.json`,
    }).then(response => {
        return response.data.data.children.map((child,idx) => child.data)
    }).catch(e=>{
        console.log(e.message)
    })
}


export default AxiosGetJSon