import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PrivateStudentRoute=({component:Component,auth,...rest})=>(
    <Route 
    {...rest}
    render={props=>( auth.isAuthenticatedStudent===true)?(
        <Component {...props}/>
    ):(
        <Redirect to='/login'/>
    )
    }
    />
);

PrivateStudentRoute.prototype={
    auth:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps)(PrivateStudentRoute)