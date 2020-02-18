import React,{Component} from 'react';
import '../css/Main.css';
import 'tachyons';
import C4 from '../images/C4.jpg';
import Video from './Video.js';
import Home2 from './Home2.js';
class Main extends Component{
    render()
    {
        return (<div id="maindiv_style">
            <div class="row " >
                <div  id="main" class="my_container col-lg-6 col-md-6   col-sm-12 " >
                    <div>
                    <h1 className="ma4" >E-Catechism</h1>
            
            <p className=" ma4"> 
           It is an easy to use, customizable online testing tool for educational purpose for 
           NED University.  The students can easily take the test and the teacher can easily grade 
           them by this tool without doing any paperwork. 
            </p>
           
            <div className='btn btn-lg btn-info' style={{marginLeft:"40px"}}><a href="/signup"> Register Now </a></div>
        
                    </div>
                    
                </div>
                       <div class="col-lg-6 " > 
                       <img src={C4} alt=".." style={{marginTop:"20px",width:"500px", border:"solid 2px"}}/> 
                       </div> 
            </div>
            <div class="row" id="modsty"  >


<div  class="col-md-12 col-lg-6 col-sm-12">

<Video />
</div>
<div  class="col-md-12 col-lg-6 col-sm-12">

<Home2 />
</div>


                

            </div>          
        </div>
        
        );}
}
export default Main;