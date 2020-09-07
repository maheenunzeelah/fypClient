import axios from 'axios';
import { type } from 'os';
const formData = new FormData();
 
export default axios.create({
    baseURL:'https://infinite-eyrie-31819.herokuapp.com/',
    headers:{
        authorization:localStorage.getItem('jwtToken'),
  
    }
})
//http://localhost:3001