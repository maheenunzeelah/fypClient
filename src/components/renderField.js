import React from 'react';
import {Select, MenuItem} from '@material-ui/core'


export const renderField = ({ input, label,type, meta: { touched, error } }) => (
    
  <div >
    
    <label style={{marginTop:'6px'}}>{label}</label>
    <div>
      <input {...input}   type={type} style={{backgroundColor: "white",border:'solid 1px #1C2331'}} />
      {touched && error && <span className="ui error message">{error}</span>}
      
    </div>
  </div>
)




