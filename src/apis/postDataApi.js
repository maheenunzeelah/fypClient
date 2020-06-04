import axios from 'axios';
import { type } from 'os';
const formData = new FormData();
 
export default axios.create({
    baseURL:'http://localhost:3001',
    headers:{
        authorization:localStorage.getItem('jwtToken'),
  
    }
})
