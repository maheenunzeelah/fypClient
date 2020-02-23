import axios from 'axios';
const setAuthToken= token =>{
    console.log(token);
    if(token){
    //Apply to every request
    
    axios.defaults.headers.common['authorization'] = token;
    console.log(axios.defaults.headers.common['authorization'])
    }
    else{
     //Delete authorization header
     delete axios.defaults.headers.common['authorization'] ;
    }
}

export default setAuthToken;