import React, { Component } from 'react';
import TestWindow from '../TestWindow';
import '../../css/EditGroup.css'
import {Card,CardContent,Box} from '@material-ui/core'

class EditGroup extends Component {
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
                            <div className="w-200">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div>

                </div>
                </CardContent>
                </Card>
               
                </div>
            
        )
    }
}

export default EditGroup;