import Axios from './axios';
import {
    message,
} from 'antd';

export function AxiosGetJSon(reddit) {
    return Axios({
        method: "GET",
        url: `http://www.reddit.com/r/reactjs.json`,
    }).then(data => {
        console.log(data)
        return data.data.children.map((child,idx) => child.data)
    }).catch(e=>{
        console.log(e.message)
    })
}

export function AxiosGetList(reddit) {
    return Axios({
        method: "GET",
        url: `/hook/piece/get?piece_id22=122206427`,
    }).then(response => {
      return response
    }).catch(err=>{
        message.error(err.message,1);
    })

}


export default AxiosGetJSon