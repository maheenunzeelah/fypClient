import React, { Component } from 'react';
import TestWindow from '../TestWindow';
import '../../css/EditGroup.css'
import EnhancedTable from './AddStudents2';
import { renderBatchField } from '../renderField';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Box, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core'
import { fetchStudents, profileLoading, editGroup } from '../../actions';
import { connect } from 'react-redux'
import { isEmpty } from '../../validation/is-empty';
import AssignTest from './AssignTest';
import Preview from './Preview';
import Settings from '../PublicPages/Settings';
import TestPreview from '../TestPreview';
import Spinner from '../Spinner';
import { stat } from 'fs';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {

        backgroundColor: "primary"
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Add Students', 'Assign Tests', 'Settings', 'Preview'];
}

function getStepContent(stepIndex, props, parentFunction) {

    function handleSubmit(formValue) {
        props.fetchStudents(formValue)

    }
    switch (stepIndex) {
        case 0:
            return (<div className="row">
                <div className="col-md-7 container">
                    <form onSubmit={props.handleSubmit(handleSubmit)}>
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
            return (
                <div className="container mt-5 mb-5 align-center " >
                    <center>
                        <AssignTest callback={parentFunction} />

                    </center>
                </div>
            )
        case 2:
            return (
                <div className="container mt-5 mb-5 align-center ">
                    <center>

                        <Settings />
                    </center>
                </div>
            )
        case 3:
            return (
                <div className="container mt-5 mb-5 " style={{width:'70%'}}>
                    

                        <Preview />
                   
                </div>
            )

        default:
            return 'Unknown stepIndex';
    }
}

function EditGroup(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [checked, setChecked] = React.useState([]);
    const steps = getSteps();
    React.useEffect(() => {

    })
    console.log(props)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const parentFunction = (arrChecked) => {
        setChecked(arrChecked)
    }
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        props.location.state.groupId.length > 0 ?
            <div className="container mt-5 mb-5 ">
                <TestWindow to="/dashboard/newGroup" label="Edit Group" separator=' > ' />
                {props.location.state.name ? <h5>{props.location.state.name}</h5> : null}
                <Stepper activeStep={activeStep} alternativeLabel style={{ border: "solid 2px #212121" }} className="grey lighten-1" >
                    {steps.map((label) => (
                        <Step key={label}>
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
                                <Typography className={classes.instructions}>{getStepContent(activeStep, props, parentFunction)}</Typography>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        variant="contained" color="primary"
                                        className="mr-3"
                                    >
                                        Back
                </Button>
                                    <Button variant="contained" color="primary" onClick={handleNext}
                                        disabled={checked.length <= 0 && activeStep === 1}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div> :
            window.location.replace('/dashboard/group')
    );
}

const mapStateToProps = (state) => {
    console.log(state.currentGroup)
    return {
        studentList: state.studentList,
        loading: state.loading,
        currentGroup: state.currentGroup
    }
}
const formWrapped = reduxForm({
    form: 'Batch',

}
)(EditGroup)
export default connect(mapStateToProps, { fetchStudents, profileLoading, editGroup })(formWrapped);