import React, {Component} from 'react';
import Breadcrumb from './Breadcrumbs';
import { Link } from 'react-router-dom'
import { spawn } from 'child_process';


class TestWindow extends Component {

    
   render(){
    const items = [
        { to: '/dashboard', label: 'Test', separator: ' > ' },
        // { to: '/newTest', label: 'New Test', separator: ' > ' },
        { to: this.props.to , label: this.props.label , separator:this.props.separator},
        //newTest/editTest
    ]
    const path=this.props.to;
  
    console.log(path)
    return (
        <div className="container " id="main" style={{margin:"20px" }} >

            <div className="row">

                <div className="col-lg-8 col-xl-8 col-md-6 col-sm-6 col-5" >
                    <Breadcrumb>

                        {items.map(({ to, label,separator }) => (
                            <span >
                            <Link style={{color:"pink"}} key={to} to={to}>
                                {label}
                            </Link>
                            {separator}
                            </span>
                        ))}

                    </Breadcrumb>
                </div>


                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-7" id="links">

                      {/* Test Icon */}
                    <Link to="/dashboard" style={{color:"#ff4081"}}><i className="fa fa-file fa-2x " aria-hidden="true"><p className="small mr-3">Tests</p></i></Link>

                      {/*  Groups Icon */}
                    <Link to="/dashboard/group" style={{color:"#ff4081"}}><i className="fa fa-users fa-2x" aria-hidden="true"><p className="small mr-3">Groups</p></i></Link>

                    {/*  Links Icon */}
                    <Link style={{color:"#ff4081"}}><i className="fa fa-link fa-2x" aria-hidden="true"><p className="small mr-3">Links</p></i></Link>

                </div>

            </div>
        </div>
    )}
}
export default TestWindow;