import React from 'react'
import '../css/Group.css'
import { Link } from 'react-router-dom' 
import TestWindow from './TestWindow'
const Group = () =>{

    return(
    
<div class="Conatainer">  
    
{/* main page*/}
<div class="jumbotron vertical-center"> 

            {/*  page name and side links  */}
            <div class="container" id="main" >
              <div class="row">
                    <div class="col-lg-8 col-xl-9 col-md-6 col-sm-6 col-5"> 
                          <h6> <strong> Groups </strong> </h6>
                    </div>
                    <div class="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-7" id="toplinks">
                            <Link  to='/Test'><i class="fa fa-file-o fa-2x" aria-hidden="true"><p>Tests</p></i></Link>
                            <Link  to='/Test'><i class="fa fa-users fa-2x" aria-hidden="true"><p>Groups</p></i></Link>
                            <Link  to='/Test'><i class="fa fa-link fa-2x" aria-hidden="true"><p>Links</p></i></Link>
                    </div>
              </div>
            </div>
            {/*  page name and side links ends  */}
        

           
           
            {/* black group bar */}
            <div class="container" >
              <div class="row" id='tab'>
                    <Link to="/Test" class="w3-bar-item w3-button tablink" ><i class="fa fa-window-maximize w3-margin-right" aria-hidden="true"></i>Group</Link> 
              </div>
            </div>
            <br/>
            {/* black group bar ends*/}




            {/* groups list container */}
            <div className="container">
            
           
            {/* groups list  */}
            <div id="Group" class="w3-container w3-white w3-padding-16 ">
            <br/>
                
                    {/* search and new group option */}
                    <div class="w3-row-padding" >
                    
                          <div class="w3-quarter w3-left">   
                          <input class="w3-input w3-border" type="text" placeholder=" Search Group name"></input>
                          </div>
                          <div class="w3-quarter w3-right" >
                          <Link to='/newGroup' class="w3-button w3-black">New Group +</Link>
                          </div>

                    </div>
                    <br/>
                    {/* search and new group option ends */}
              
            
              {/* Group1 container*/}
              <div className="container">
              
              <button  class="collapsible" id="Group1" data-toggle="collapse" data-target="#demo1"><i class="fa fa-users fa-2x "  aria-hidden="true"></i> Group One</button>
              
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


            {/* Group2 container*/}
            <div className="container">
              
              <button  class="collapsible" id="Group1" data-toggle="collapse" data-target="#demo2"><i class="fa fa-users fa-2x "  aria-hidden="true"></i> Group Two</button>
              
              <div id="demo2" class="w3-container collapse">
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
            {/* Group2 container ends*/}

   
</div>
{/* groups list ends */}

        
</div>
{/* groups list container ends */}

</div>
{/* main page ends */}

</div>
)
  
}

export default Group;
