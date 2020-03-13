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
        <div className="container" id="main" style={{margin:"20px"}} >

            <div className="row">

                <div className="col-lg-8 col-xl-8 col-md-6 col-sm-6 col-5">
                    <Breadcrumb>

                        {items.map(({ to, label,separator }) => (
                            <span>
                            <Link key={to} to={to}>
                                {label}
                            </Link>
                            {separator}
                            </span>
                        ))}

                    </Breadcrumb>
                </div>


                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-7" id="links">

                    <Link to="/dashboard"><i className="fa fa-file fa-2x" aria-hidden="true"><p>Tests</p></i></Link>
                    <Link to="/group"><i className="fa fa-users fa-2x" aria-hidden="true"><p>Groups</p></i></Link>
                    <Link><i className="fa fa-link fa-2x" aria-hidden="true"><p>Links</p></i></Link>

                </div>

            </div>
        </div>
    )}
}
export default TestWindow;