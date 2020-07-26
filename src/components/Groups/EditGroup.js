import React, { Component } from 'react';
import TestWindow from '../TestWindow';
import '../../css/EditGroup.css'
import {Card,CardContent,Box} from '@material-ui/core'
import { fetchStudents } from '../../actions';
import {connect} from 'react-redux'
import { isEmpty} from '../../validation/is-empty';

class EditGroup extends Component {
    componentDidMount(){
     this.props.fetchStudents()
    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <TestWindow to="/dashboard/newGroup" label="Edit Group" separator=' > ' />
                
                <Card style={{margin:'50px'}}>
                    <CardContent >
                <p >
                    <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Add Students</a>
                    {/* <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Assign Tests</a>
                    <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Delete Groups</a> */}

                </p>
                <div className="row">
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                           
                           {!isEmpty(this.props.studentList)?this.props.studentList.map(stud=>{
                             return <div className="w-200">
                               
                              </div>  
                           }
                           ):<></>}
                            
                        </div>
                    </div>

                </div>
                </CardContent>
                </Card>
               
                </div>
            
        )
    }
}
const mapStateToProps=(state)=>{
 return{
   studentList:state.studentList
 }
}
export default connect(mapStateToProps,{fetchStudents})(EditGroup);