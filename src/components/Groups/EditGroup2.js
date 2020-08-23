import React, { Component } from 'react';
import TestWindow from '../TestWindow';
import '../../css/EditGroup.css'
import EnhancedTable from './AddStudents2';
import { renderBatchField } from '../renderField';
import { Field,reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Box,Stepper,Step,StepLabel,Button,Typography} from '@material-ui/core'
import { fetchStudents } from '../../actions';
import { connect } from 'react-redux'
import { isEmpty } from '../../validation/is-empty';
import AssignTest from '../Assign'
import TestPreview from '../TestPreview'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
     
      backgroundColor:"primary"
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Add Students', 'Assign Tests', 'Settings','Preview'];
  }
  
  function getStepContent(stepIndex,props) {
    
      function handleSubmit(formValue){
       props.fetchStudents(formValue)
      
    }
    switch (stepIndex) {
      case 0:
        return (<div className="row">
        <div className="col-md-7 container">
              <form onSubmit={ props.handleSubmit(handleSubmit)}>
                                        <div className="input-group m-3">
                                            <label className="pr-3 pink-text">Select Batch</label>
                                            <Field className="form-control" name="batch" component={renderBatchField} />
                                            <button className="mt-5 btn btn-info btn-sm float-right" type="submit">Go</button>
                                        </div>
                                        
                                    </form>
                                    {/* {console.log(this.props.studentList)}
                           {!isEmpty(this.props.studentList)?this.props.studentList.map(stud=>{
                             return <div className="w-200">
                           <ul><ol><Checkbox />{stud.firstName}</ol></ul>
                              </div>  
                           }
                           ):<></>} */}
                                    {!isEmpty(props.studentList) ? <EnhancedTable studList={props.studentList} /> : null}
        </div>
        </div>);
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown stepIndex';
    }
  }
  
function EditGroup(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
      <div className="container mt-5 ">
        <Stepper activeStep={activeStep} alternativeLabel style={{border:"solid 2px #ffab00"}} className="amber lighten-4">
          {steps.map((label) => (
            <Step  key={label}>
              <StepLabel className="">{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep,props)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="contained" color="primary"
                  className="mr-3"
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
const mapStateToProps = (state) => {
    
    return {
        studentList: state.studentList
    }
}
const formWrapped=reduxForm({
    form: 'Batch'
}
)(EditGroup)
export default connect(mapStateToProps, { fetchStudents })(formWrapped);