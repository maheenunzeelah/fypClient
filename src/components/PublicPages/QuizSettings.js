import React, {Component} from 'react';
import Toggle from './Toggle';
import img from '../../images/optionalInst.png';
import Card from './card';
import Settings from './Settings';
function QuizSettings(){
   

    return(
      <div className="QuizSettings font-weight-bold amber-text">
      <Card />
      {/* <Settings /> */}
      </div> 
    );
}
export default QuizSettings;