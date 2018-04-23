import Axios from 'axios';

Axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

class Ajax {
    constructor(x, y) {

    }
    async post(option) {
        return new Promise((resolve, reject) => {
            Axios({
                method: "POST",
                url: option.url,
                data: option.data
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
module.exports  = Ajax
