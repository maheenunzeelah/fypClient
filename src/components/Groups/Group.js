import React,{Component} from 'react'
import '../../css/Group.css'
import { Link } from 'react-router-dom' 
import TestWindow from '../TestWindow';
import {groupList} from '../../actions';
import {connect} from 'react-redux';
import {isEmpty} from '../../validation/is-empty'


class Group extends Component{
  state={
      search:''
  }
  componentDidMount(){
    this.props.groupList(1)
  }
  handleChange=(e)=>{
   this.setState({
     search:e.target.value
   })
  }

  DynamicButtons=()=>{
    return this.props.groups.group.map(group=>
             <section className="pagin">
               {group.currentPage!=1 && group.previousPage!=1?<a className="white-text" onClick={()=>this.props.groupList(1)}>1</a>:null}

               {group.hasPreviousPage?<a  className="white-text" onClick={()=>this.props.groupList(group.previousPage)}>{group.previousPage}</a>:null}

                <a  className="white-text" onClick={()=>this.props.groupList(group.currentPage)}>{group.currentPage}</a>
               
                {group.hasNextPage?<a  className="white-text" onClick={()=>this.props.groupList(group.nextPage)}>{group.nextPage}</a>:null}

               { (group.lastPage!=group.currentPage && group.nextPage!=group.lastPage)?<span className="white-text">...<a  className="white-text" onClick={()=>this.props.groupList(group.lastPage)}>{group.lastPage}</a></span>:null
             }
             
             </section>     
             )
             
}  

filteredList=(grp,index)=>{
     {/* Group1 container*/}
             
   return  <div className="container amber-text">
              
     <button  className="collapsible btn btn-outline-pink" style={{textAlign:'left'}} id="Group1" data-toggle="collapse" data-target={`#demo${index}`}><i class="fa fa-users fa-2x "  aria-hidden="true"></i> {grp.groupName}</button>
     
     <div id={`demo${index}`} class="w3-container collapse">
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
}
renderList=()=>{
  let filtered
  filtered=this.props.groups.group.filter(grp => {
        
      // If value in searched bar matches the value of testname
      return (grp.groupName.indexOf(this.state.search) !== -1)
    })  
  // When component will render first time
  if (isEmpty(filtered)) {
    console.log('empty')
    return this.props.groups.group.map((grp,index) => {
      // return test.test.map((test, index) => {
        return <div>
          {/* For preventing code replication function is called*/}
          {this.filteredList(grp, index)}
        </div>
      // })
      //   ;

    })
  }
  // When we have list of filtered arry
  else {
    return filtered.map((grp, index) => {
      return <div>
        {this.filteredList(grp, index)}
      </div>
    })
      ;


  }
}
 render(){

   
     
      if(!isEmpty(this.props.groups)){
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
                          <input class="w3-input w3-border" type="text" placeholder=" Search Group name" onChange={(e)=>this.handleChange(e)} value={this.state.search}></input>
                          </div>
                          <div class="w3-quarter w3-right" >
                          <Link to='/dashboard/newGroup' class="w3-button w3-black">New Group +</Link>
                          </div>

                    </div>
                    <br/>
                    {/* search and new group option ends */}
              
            {this.renderList()}
             


          

   
</div>
{/* groups list ends */}

        
</div>
{/* groups list container ends */}


{/* main page ends */}
    {this.DynamicButtons()}
</div>
  
)}
else{
return null
}

}

}
const mapStateToProps=(state)=>{
 console.log(state.groupsList)
  return{
    groups:state.groupsList
  }
}

export default connect(mapStateToProps,{groupList})(Group);
