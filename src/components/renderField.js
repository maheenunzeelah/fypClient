import React from 'react';



const renderField = ({ input, label, type, meta: { touched, error } }) => (
    
  <div>
    <label>{label}</label>
    <div>
      <input {...input}  type={type} />
      {touched && error && <span className="ui error message">{error}</span>}
    </div>
  </div>
)

export default renderField;