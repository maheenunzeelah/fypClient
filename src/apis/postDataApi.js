import axios from 'axios';
import { type } from 'os';
 
export default axios.create({
    baseURL:'http://localhost:3001',
    headers:{
        authorization:localStorage.getItem('jwtToken'),
        'content-type': 'multipart/form-data'
    }
})