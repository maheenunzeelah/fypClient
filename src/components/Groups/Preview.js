import React, {  useState,useEffect } from 'react';
import {connect} from 'react-redux';
import { getSettings } from '../../actions';
import {isEmpty} from '../../validation/is-empty'
const Preview = (props) => {
    const initialSettings={ 
        random:false,
        available: false,
        timeLimit:120,
        introduction:`Read all the questions carefully and go through the following settings`,
        guid:true,
        attempts:1
    }
    const [settingsState,setSettings]=useState(initialSettings)

    useEffect(()=>{
        if(!isEmpty(props.id))
        props.getSettings(props.id)
  
      
    },[])
    useEffect(()=>{
        setSettings(props.settings)
    },[props.settings])
  if(props.settings.length>0){

    var {attempts,introduction,timeLimit}=props.settings[0]
  }
  else
  var {attempts,introduction,timeLimit}=settingsState
  console.log(attempts)
    return (
        <div className="container mt-5">
            <div className="jumbotron  blue-grey lighten-5 ">
               <h3 >Introduction</h3>
               <p className="mt-3" style={{fontSize:'17px'}}>{introduction}</p>
                <ul>
                    <ol className="justify-content-start">Time Limit: {timeLimit}</ol>
                    <ol>Attempts Allowed: {attempts}</ol>
                </ul>
              
                <p className="font-weight-bold  ml-5">Best of Luck !</p>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    console.log(state.settings)
    return{
      settings:state.settings
    }
}


export default connect(mapStateToProps,{getSettings})(Preview);
