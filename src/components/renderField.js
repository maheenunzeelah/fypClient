import React from 'react';
import {Select, MenuItem} from '@material-ui/core'


export const renderField = ({ input, label,type, meta: { touched, error } }) => (
    
  <div >
    
    <label>{label}</label>
    <div>
      <input {...input}   type={type} style={{backgroundColor: "white" ,border:'solid 1px #1C2331'}} />
      {touched && error && <span className="ui error message">{error}</span>}
      
    </div>
  </div>
)



export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <Select
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}/>
)

