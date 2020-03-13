import MicRecorder from 'mic-recorder-to-mp3';
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class SignupSecond extends Component {
    state = {
        isRecording: false,
        blobURL: '',
        isBlocked: false,
    }
    start = () => {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
    };
    stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL, isRecording: false });
            }).catch((e) => console.log(e));
    };
    componentDidMount() {
        navigator.getUserMedia({ audio: true },
            () => {
                console.log('Permission Granted');
                this.setState({ isBlocked: false });
            },
            () => {
                console.log('Permission Denied');
                this.setState({ isBlocked: true })
            },
        );
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <h3 style={{ margin: "22px" }}>Say Something</h3>

                    <audio src={this.state.blobURL} controls="controls" />
                    <button className="btn btn-lg btn-primary float-right" onClick={this.start} disabled={this.state.isRecording}>
                        Record
                </button>
                    <button className="btn btn-lg btn-danger float-right" onClick={this.stop} disabled={!this.state.isRecording}>
                        Stop
                </button>

                </div>
                <div className="text-center mt-4">
                  <MDBBtn id="StuNext" className="default-color"  style={{ marginBottom: "74px" }}  onClick={this.props.previousPage}>
                    Previous
              </MDBBtn>
                  <MDBBtn className="default-color" type="submit" style={{ marginBottom: "74px" }} onClick={this.props.onNext}>
                    Next
              </MDBBtn>
                </div>
            </div>
        )
    }

}

export default SignupSecond;
