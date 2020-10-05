import React, { Component } from 'react';
import { Card, CardContent, Button, Typography } from '@material-ui/core';
import { studentFace } from '../../actions';
import { connect } from 'react-redux';
class SignupThird extends Component {
    state={
        face:false
    }
    handleClick=()=>{
        this.props.studentFace()
      
    }
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.face !== this.state.face) {
          this.setState({ face: nextProps.face });
        }
      }
    render() {
       
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <h5 style={{ margin: "22px" }}>Look straight into the camera and click the following button</h5>
                    <Button onClick={this.handleClick}>Start</Button>
                </div>
                <div className="text-center mt-4">
                  <Button id="StuNext" className="default-color"  style={{ marginBottom: "74px", marginRight:'20px' }}  onClick={this.props.previousPage}>
                    Previous
              </Button>
                  <Button className="default-color" id="next"  style={{ marginBottom: "74px" }} onClick={this.props.onNext} disabled={!this.state.face}>
                    Next
              </Button>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
console.log(state.face)
return{
face:state.face
}
}
export default connect(mapStateToProps,{studentFace})(SignupThird);