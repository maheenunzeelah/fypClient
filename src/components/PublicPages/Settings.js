import React, { Component } from 'react';
import Toggle from './Toggle';
import img from '../../images/optionalInst.png';
import { connect } from 'react-redux';
import { reduxForm, Field ,change} from 'redux-form';
import {saveSettings,getSettings} from '../../actions'
import {isEmpty} from '../../validation/is-empty'
class Settings extends Component {
    constructor(props) {
        super(props)
    this.state={
        random:false,
        available: true,
        timeLimit:120,
        introduction:'Read all the questions carefully and go through the following settings',
        guid:true,
        attempts:1
    }
    }
    componentDidMount() {
        if(!isEmpty(this.props.match))
         this.props.getSettings(this.props.match.params.id)
         Object.entries(this.state).map(([key,val])=>{
             this.props.dispatch(change('Settings',key , val))
         })
       
    }
 
    handleSubmit = (values) => {
        
     if(!isEmpty(values)){
        let value=Object.assign(this.state,values)
        this.props.saveSettings(value)
     }
        
     else{
         this.props.saveSettings(this.state)
     }   
    }
    handleClick = (e) => {
        this.setState(prevState => {
            return {
                available: !prevState.available
            }
        })
    }
    handleRandomClick=()=>{
        this.setState(prevState => {
            return {
                random: !prevState.random
            }
        })
    }
    render() {
        const { random , available,introduction,timeLimit,attempts} = this.state
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <Toggle heading="Test Access" label="Availibilty" >
                        <span> <Field type="radio" component="input" name="available" value="true" checked={available}/> Available <br /></span>
                        <span><Field type="radio" component="input" name="available" value="false" checked={!available} /> Not Available<br /></span>
                    </Toggle>
                    <Toggle label="Attempts">
                        <p>Limit the attempts allowed</p>
                        <Field type="number" name="attempts" component="input" style={{ width: "70px" }} value={attempts}/>
                        <span><Field type="radio" component="input" name="attempts" value="Unlimited" /> Umlimited<br /></span>
                    </Toggle>
                    {/* <Toggle heading="Test Introduction" label="UserInfo">
             <p>Required User DEtails</p>
             <span> <Field type="checkbox" checked="checked"  value="Fname" />First Name <br/></span>
             <span><Field type="checkbox"  value="lname"/>Last Name<br /></span> 
             <span><Field type="checkbox"  value="email"/>Email<br /></span>
            </Toggle> */}
                    <Toggle label="Instructions">
                        <p><strong>Guidlines </strong><Field type="checkbox" component="input" value={`"${available}"`} onClick={(e)=>this.handleClick(e)} name="guid" />Display Test Guidlines before Test Starts<br /></p>
                        <hr />
                        <Field component="textarea" value={introduction} name="introduction" style={{ width: "650px", height: "180px", margin: "20px" }} />
                    </Toggle>
                    <Toggle heading="Taking Test" label="TimeLimit">
                        <label htmlFor="Min">Seconds</label>
                        <span><Field type="number" component="input" value={timeLimit}name="timeLimit"/></span>
                    </Toggle>
                    {/* <Toggle label="Resume">
            <p><Field type="checkbox" checked="checked"  value="guid" />Allow save and resume later</p>
            </Toggle> */}

                    {/* <Toggle heading="Test Question">
            <p>Display <Field type="checkbox" checked="checked"  value="guid" />10 questions per page</p>
            </Toggle> */}
                    <Toggle label="Randomize">
                        <span><Field type="checkbox" component="input" value={`"${random}"`} name="random" checked={random}/>Show question in random order</span>
                    </Toggle>
                    <button type="submit" className="btn btn-secondary float-right">Save</button>
                </form>
            </div>
        );
    }

}
const mapStateToProps=(state)=>{
    return{
        settings:state.settings
    }
}
const formWrapped = reduxForm({
    form: 'Settings',
}
)(Settings)
export default connect(mapStateToProps,{saveSettings,getSettings})(formWrapped);