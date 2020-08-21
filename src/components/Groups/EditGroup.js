import React, { Component } from 'react';
import TestWindow from '../TestWindow';
import '../../css/EditGroup.css'
import {Card,CardContent,Box,Checkbox,TableRow,TableBody,TableHead ,TableCell} from '@material-ui/core'
import { fetchStudents } from '../../actions';
import {connect} from 'react-redux'
import {isEmpty} from '../../validation/is-empty';
import AssignTest from '../Assign'
import TestPreview from '../TestPreview'
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
                    <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">Assign Tests</a>
                    <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">Preview</a>

                </p>
             
                <div className="row">
                    <div className="col">
                        <div className="collapse" id="multiCollapseExample1">
                           {console.log(this.props.studentList)}
                           {!isEmpty(this.props.studentList)?this.props.studentList.map(stud=>{
                             return <div className="w-200">
                           <ul><ol><Checkbox />{stud.firstName}</ol></ul>
                              </div>  
                           }
                           ):<></>}
                            
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <div className="collapse" id="multiCollapseExample2">
                           <AssignTest />
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <div className="collapse" id="multiCollapseExample3">
                           <TestPreview />
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
    console.log(state.studentList)
 return{
   studentList:state.studentList
 }
}
export default connect(mapStateToProps,{fetchStudents})(EditGroup);