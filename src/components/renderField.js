import React from 'react';
import {Select, MenuItem} from '@material-ui/core'


export const renderField = ({ input, label,type, meta: { touched, error } }) => (
    
  <div >
    
    <label style={{marginTop:'6px'}}>{label}</label>
    <div>
      <input {...input}   type={type} style={{backgroundColor: "#fce4ec ",border:'solid 1px #1C2331'}} />
      {touched && error && <span className="ui error message">{error}</span>}
      
    </div>
  </div>
)
const departs = ['Software Engg','BCIT']
export const renderDepartField = ({ input, meta: { touched, error } }) => (
  <div>
    
    <select {...input} style={{backgroundColor: "#fce4ec ",border:'solid 1px #1C2331'}}>
     <option value=""></option>
      {departs.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span  className="ui error message">{error}</span>}
  </div>
)
const batch=['2016-17','2017-18','2018-19','2019-20']
export const renderBatchField = ({ input, meta: { touched, error } }) => (
  <div>
    
    <select {...input} style={{backgroundColor: "#fce4ec ",width:'150px',border:'solid 1px #1C2331'}}>
    <option value=""></option>
      {batch.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span className="ui error message">{error}</span>}
  </div>
)



