import React, {Component} from 'react';
import Toggle from './Toggle';
import img from '../../images/optionalInst.png';
import Card from './card';
import Settings from './Settings';
function QuizSettings(){
   

    return(
      <div className="QuizSettings font-weight-bold black-text">
      <Card />
      <Toggle heading="Test Access" label="Availibilty">
       <span> <input type="radio" name="Availability"  value="Available" /> Available <br/></span>
       <span><input type="radio" name="Availability" value="Not Available"/> Not Available<br /></span> 
      </Toggle>
      <Toggle label="Attempts">
         <p>Limit the attempts allowed</p>
         <span> <input type="number" name="attempts" style={{ width: "70px" }} /><br/></span>
       <span><input type="radio"  value="Unlimited"/> Umlimited<br /></span> 
      </Toggle>
     
      <Toggle label="Instructions">
       <p><strong>Guidlines </strong><input type="checkbox" checked="checked"  value="guid" />Display Test Guidlines before Test Starts<br/></p>
      <hr />
      This Test:
 <ul>
   <li> Will allow you to save and finish at a later date</li>
   <li> Has a time limit of 20 minutes</li>
   <li>Will not allow you to go back and change your answers</li>
   <li>Will finish if you get any Questions incorrect</li>
   <li> Has a pass mark of 85%</li>
 </ul>
<hr />
 <h6>Custom Instructions (Optional)</h6>
   <img src={img} style={{width:"700px" , height:"180px"}}/> 
      </Toggle>
      <Toggle heading="Taking Test" label="TimeLimit">
       <label htmlFor="Min">Seconds</label>
       <span><input type="number" value="20"/></span>
      </Toggle>
     
      <Toggle label="Randomize">
      <span><input type="checkbox" checked="checked"  value="guid" />Show question in random order</span>
      </Toggle>
      {/* <Settings /> */}
      </div> 
    );
}
export default QuizSettings;