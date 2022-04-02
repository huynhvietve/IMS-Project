
import axios from 'axios';
import *  as Config from './config';

export default function callAPI(endpoint, method = 'GET',body) {
            return axios({
                method: method,
                url: `${Config.API_Mentor}/${endpoint}`,
                data: body
            })
            .catch ((e) => {
             alert('Lỗi kết nối');
             console.log(e)
            })
}