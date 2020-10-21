import React, {Component} from 'react';
import Toggle from './Toggle';
import img from '../../images/optionalInst.png';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';

class Settings extends Component{
    handleSubmit=(values)=>{
        console.log(values)
    }
    render(){
        return(
            <div>
           <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <Toggle heading="Test Access" label="Availibilty" >
             <span> <Field type="radio" component="input" name="Availability"  value="Available" /> Available <br/></span>
             <span><Field type="radio" component="input" name="Availability" value="Not Available"/> Not Available<br /></span> 
            </Toggle>
            <Toggle label="Attempts">
               <p>Limit the attempts allowed</p>
               <span> <Field type="radio"component="input" checked="checked"  value="3" /> 3 <br/></span>
             <span><Field type="radio"  component="input" value="Multiple"/> Multiple(more than 3)<br /></span> 
             <span><Field type="radio" component="input"  value="Unlimited"/> Umlimited<br /></span> 
            </Toggle>
            {/* <Toggle heading="Test Introduction" label="UserInfo">
             <p>Required User DEtails</p>
             <span> <Field type="checkbox" checked="checked"  value="Fname" />First Name <br/></span>
             <span><Field type="checkbox"  value="lname"/>Last Name<br /></span> 
             <span><Field type="checkbox"  value="email"/>Email<br /></span>
            </Toggle> */}
            <Toggle label="Instructions">
             <p><strong>Guidlines </strong><Field type="checkbox" component="input" checked="checked"  value="guid" />Display Test Guidlines before Test Starts<br/></p>
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
             <span><Field type="number" component="input" value="20"/></span>
            </Toggle>
            {/* <Toggle label="Resume">
            <p><Field type="checkbox" checked="checked"  value="guid" />Allow save and resume later</p>
            </Toggle> */}
          
            {/* <Toggle heading="Test Question">
            <p>Display <Field type="checkbox" checked="checked"  value="guid" />10 questions per page</p>
            </Toggle> */}
            <Toggle label="Randomize">
            <span><Field type="checkbox" component="input" checked="checked"  value="guid" />Show question in random order</span>
            </Toggle>
            </form>
            </div> 
          );
    }

}
const formWrapped = reduxForm({
    form: 'Settings',
    
}
)(Settings)
export default formWrapped;