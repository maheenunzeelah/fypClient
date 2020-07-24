import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const RoleSelection = () => {

  return (

    <div className="container mb-5">
      <div className="row flex flex-row justify-content-center m-5"><h2 className="white-text ">Select Your Role</h2></div>
      <div className="row ">
        <div className="col-sm-2"></div>
        <div className="col-sm-4 ">
          <div className="card p-4">
            <div className="card-body">
              <h5 className="card-title">Signup As a student</h5>
              <p className="card-text">Register yourself as a student by giving your details. Click below and access
        tests given by your teachers and get ready for fair assessment</p>
              <Link to={{ pathname: '/signup', state: { role: 'student' } }} className="btn btn-primary" >Student Signup</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 ">
          <div className="card p-3">
            <div className="card-body">
              <h5 className="card-title">Signup As a Teacher</h5>
              <p className="card-text">Register yourself as a teacher by giving your details. You can create tests,
        and assign them to a group of students. Click below and start using our amazing features</p>
              <Link to={{ pathname: '/signup', state: { role: 'teacher' } }} className="btn btn-primary" >Teacher Signup</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  )
}
export default RoleSelection