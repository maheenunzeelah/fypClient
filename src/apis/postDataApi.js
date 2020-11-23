import axios from 'axios';
import { type } from 'os';
import {profileLoading} from '../actions'

const formData = new FormData();


export default axios.create({
    baseURL:'http://localhost:3001',
    headers:{
        authorization:localStorage.getItem('jwtToken'),
  
    }
})
//