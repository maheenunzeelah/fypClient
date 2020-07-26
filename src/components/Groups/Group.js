import React,{Component} from 'react'
import '../../css/Group.css'
import { Link } from 'react-router-dom' 
import TestWindow from '../TestWindow'


class Group extends Component{
 render(){
    return(
    
<div >  
    
<TestWindow to="/dashboard/newGroup" label=" Group" separator= ' > ' />

          

           
           
            {/* black group bar */}
            <div class="container"  >
              <div className="row grey darken-2 " id='tab'>
                    <Link to="/Test" className="w3-bar-item w3-button tablink" ><i class="fa fa-window-maximize w3-margin-right" aria-hidden="true"></i>Group</Link> 
              </div>
            </div>
            <br/>
            {/* black group bar ends*/}




            {/* groups list container */}
            <div className="container">
            
           
            {/* groups list  */}
            <div id="Group" className="w3-container  w3-padding-16 " style={{border:'solid pink'}}>
            <br/>
                
                    {/* search and new group option */}
                    <div class="w3-row-padding" >
                    
                          <div class="w3-quarter w3-left">   
                          <input class="w3-input w3-border" type="text" placeholder=" Search Group name"></input>
                          </div>
                          <div class="w3-quarter w3-right" >
                          <Link to='/dashboard/newGroup' class="w3-button w3-black">New Group +</Link>
                          </div>

                    </div>
                    <br/>
                    {/* search and new group option ends */}
              
            
              {/* Group1 container*/}
              <div className="container amber-text">
              
              <button  className="collapsible btn btn-outline-pink" style={{textAlign:'left'}} id="Group1" data-toggle="collapse" data-target="#demo1"><i class="fa fa-users fa-2x "  aria-hidden="true"></i> Group One</button>
              
              <div id="demo1" class="w3-container collapse">
              <br/>
              <p>1 test Assigned</p><hr/>
                  
                  <div className="w3-row">
                      <div className="w3-half">
                      <p><i class="fa fa-file-o fa-1x" aria-hidden="true"></i> arisha</p>
                      </div>
                      <div className="w3-right">
                      <Link to='/Test' id="Setting">Settings</Link>
                      <Link to='/Test' id="Preview">Preview</Link>
                      <Link to='/Test' class="w3-btn w3-ripple w3-teal">Result</Link>
                      </div>
                  </div>
                  <hr/>

                <div className="w3-row" id="Links">
                  
                  <span className="Link"><i class="fa fa-pencil" aria-hidden="true"></i><Link to='/Test' class="w3-btn" >Members (0) </Link></span>
                  <span className="Link"><i class="fa fa-plus-circle" aria-hidden="true"></i><Link to='/Test' class="w3-btn" >Assign </Link></span>
                  <span className="Link"><i class="fa fa-signal" aria-hidden="true"></i>
                    <button  class="w3-btn dropdown-toggle" data-toggle="dropdown">  Statistics  </button>
                    <div class="dropdown-menu">
                    <Link to='/Test' class="dropdown-item" href="">By Group</Link>
                    <Link to='/Test' class="dropdown-item" href="#">By Questions</Link>
                    </div>
                  </span>
                  
                </div>
                <br/>
                <Link to='/Test'><p><i class="fa fa-plus-circle" aria-hidden="true"></i> Assign a test</p></Link>
              </div>
            <br/>
            </div>
            {/* Group1 container ends*/}


          

   
</div>
{/* groups list ends */}

        
</div>
{/* groups list container ends */}


{/* main page ends */}

</div>
)
  
}
}

export default Group;
