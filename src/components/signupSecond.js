import MicRecorder from 'mic-recorder-to-mp3';
import React, { Component } from 'react';
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
               <h3 style={{margin:"22px"}}>Say Something</h3>
                
                <button className="btn btn-lg btn-primary float-right" onClick={this.start} disabled={this.state.isRecording}>
                    Record
                </button>
                <button className="btn btn-lg btn-danger float-right" onClick={this.stop} disabled={!this.state.isRecording}>
                    Stop
                </button>
                
                <audio src={this.state.blobURL} controls="controls" />
            </div>
        )
    }

}

export default SignupSecond;
