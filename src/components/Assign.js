import React,{Component} from 'react';
import { MDBTable, MDBTableBody, MDBBtn, MDBBtnGroup, MDBIcon, MDBContainer } from 'mdbreact';
import { isEmpty} from '../validation/is-empty';
import {Card,CardContent,Box,Checkbox} from '@material-ui/core'
import { fetchTests} from '../actions';
import {connect} from 'react-redux'
import Test from './Tests/Test'

class AssignTest extends Component {
  compnentDidMount(){
    this.props.fetchTests(0)
  }
  render(){
      return (
        // <MDBContainer>
        // <MDBBtnGroup>
        //       <MDBBtn color="danger">
        //         <MDBIcon fab icon=" fas fa-comment" class="btn btn-outline-default btn-rounded waves-effect" className="pr-1" /> Group Message
        //       </MDBBtn>
        //       <MDBBtn color="danger">
        //         <MDBIcon fab icon=" fas fa-user" class="btn btn-elegant" className="pr-1" /> Add Members
        //       </MDBBtn>
        //       <MDBBtn color="danger">
        //         <MDBIcon fab icon=" fas fa-envelope" className="pr-1" /> Notify Members
        //       </MDBBtn>
        //       <MDBBtn color="danger">
        //         <MDBIcon fab icon=" fas fa-trash" className="pr-1" /> Delete Options
        //       </MDBBtn>
        //   </MDBBtnGroup>
        //   <MDBBtnGroup>
        //       <MDBBtn color="black" className="white-text">
        //         <MDBIcon fab className="pr-1" /> Assign Test
        //       </MDBBtn>
        //   </MDBBtnGroup>
        
        // </MDBContainer>
      <div>
        {!isEmpty(this.props.tests)?this.props.tests.map(test=>{
            return test.map(tes=>{
                 return<p>tes</p>
            })
          
        }
        ):<></>}
</div>
//       <MDBTable fixed>
//         <MDBTableBody >
//           <tr>
//           <th><button type="button" class="btn btn-outline-default btn-rounded waves-effect"><i class="fas fa-comment mr-2"
//     aria-hidden="true"></i>Group Message</button></th>
//             <th><button type="button" class="btn btn-outline-default btn-rounded waves-effect"><i class="fas fa-user-plus mr-2"
//     aria-hidden="true"></i>Add Members</button></th>
//             <th><button type="button" class="btn btn-outline-default btn-rounded waves-effect"><i class="fas fa-envelope mr-2"
//     aria-hidden="true"></i>Notify Members</button></th>
//             <th><button type="button" class="btn btn-outline-default btn-rounded waves-effect"><i class="fas fa-trash mr-2"
//     aria-hidden="true"></i>Delete Options</button></th>
//             <th><button type="button" class="btn btn-default btn-rounded waves-effect white-text "><i class="mr-2"
//     aria-hidden="true"></i>Assign Test</button></th>
//           </tr>
//           </MDBTableBody>
//     </MDBTable>
  );

}
}
const mapStateToProps = (state) => {
  console.log(state.tests.tests)
  return {
  tests: Object.values(state.tests),
  courses:state.filter.course
  }
}
export default connect(null, {fetchTests})(AssignTest);