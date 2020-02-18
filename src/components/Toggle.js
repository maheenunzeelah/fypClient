import React from 'react';

function Toggle(props){
    return(
      <div className="Toggle">
       <div className="container" style={{marginTop:"30px", textAlign:"left"}}>
            <h4>{props.heading}</h4>
        
            {/*availablility*/}
           <div className="input-group mb3">
            <div className="custom-select " data-toggle="collapse" href={`#${props.label}`} aria-expanded="false" aria-controls="collapseExample">
             {props.label}
            </div>
                {/* <div className="input-group-append">
                <label className="input-group-text" htmlFor="inputGroupSelect02">Availability</label>
                </div> */}
            
            </div>
            <div className="collapse" id={props.label}>
            <div className="card card-body">
          {props.children}
            </div>
         </div>
      </div>
      </div>
    );
}
export default Toggle;