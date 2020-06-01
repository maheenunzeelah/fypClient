import axios from 'axios';
import { type } from 'os';
 
export default axios.create({
    baseURL:'http://localhost:3001',
    headers:{
        authorization:localStorage.getItem('jwtToken'),
        'Accept': 'application/json',
            // 'Content-Type': 'multipart/form-data',
    }
})
