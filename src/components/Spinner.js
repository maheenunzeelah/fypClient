import React from 'react';
import Spinner from '../images/spinner.gif'
export default ()=>{
 return(
     <div style={{width:'200px', margin:'300px auto', display:'block'}}>
       <center><img src={Spinner} alt="loading"/></center>
     </div>
 )
}