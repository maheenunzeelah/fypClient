import React,{Component} from 'react';
import '../../css/Main.css';
import 'tachyons';
import test1 from '../../images/test1.jpg';
import test2 from '../../images/test2.jpg';
import test3 from '../../images/test3.jpg';
import test4 from '../../images/test4.jpg';
import Video from './Video.js';
import Home2 from './Home2.js';
class Main extends Component{
    render()
    {
        //backgroundColor:"rgb(7, 3, 54)"
        return (
        <div className="rgba-black-strong" style={{color:"#bbdefb"}}>
            <div className="row " >
                <div  id="main" className="my_container col-lg-6 col-md-6   col-sm-12 " >
                    <div>
                    <h1 className="ma4" >E-Catechism</h1>
            
            <p className=" ma4"> 
             An online assessment website for conducting tests effectively. It will reduce 
              paperwork and provide you easy way for creating and checking tests, preparing results and much more.
            </p>
           
            <div className='btn btn-lg  pink accent-5' style={{marginLeft:"40px" ,backgroundColor:"white"}}><a href="/signup"> Register Now </a></div>
        
                    </div>
                    <Home2 />
                </div>
                       <div className="col-lg-6 " > 
                       <img src={test3} alt=".." className="imgAnim w3-animate-opacity" style={{marginTop:"50px",width:"380px", height:"30%", border:"solid 2px"}}/> 
                       <img src={test2} alt=".." className="img1Pos w3-animate-opacity" style={{width:"350px", border:"solid 2px"}}/> 
                       <img src={test4} alt=".." className="img2Pos w3-animate-opacity" style={{width:"350px", border:"solid 2px"}}/> 
                       </div> 
            </div>
            <div className="row" id="modsty"  >


<div className="col-md-12 col-lg-6 col-sm-12">


</div>
<div className="col-md-12 col-lg-6 col-sm-12">


</div>


                

            </div>          
        </div>
        
        );}
}
export default Main;