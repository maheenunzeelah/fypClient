import MicRecorder from 'mic-recorder-to-mp3';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
// import {sendVoice} from '../../actions'; 
const Mp3Recorder = new MicRecorder({ bitRate: 8 });

var audioChunks;
var rec;
let formatData;
let blob;
var FD;
let arrVoices=[];
class SignupSecond extends Component {
    state = {
        isRecording: false,
        blobURL: '',
        isBlocked: false,
        isCalled:true,
        count:0
    }
    func=()=>{
       
            if(arrVoices.length!==this.props.RecNo){
                this.start()
            setInterval(()=>{
                this.start()
            setTimeout(this.stop,6000)
            },7000)
        }
    }
    
  
    start = () => {
       
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true ,count:this.state.count+1},()=>console.log(this.state.count));
                  
                }).catch((e) => console.error(e));
        }
        // this.setState({ isRecording: true })
        // audioChunks = [];
        // rec.start();
    };
    stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
               
                
                const blobURL = URL.createObjectURL(blob)
                console.log(blobURL)
                this.setState({ blobURL, isRecording: false });
                formatData = new FormData();
                // formatData.append('data', blob);
                arrVoices.push(blob)
                // for (var value of formatData.values()) {
                //     console.log(value); 
                //  }
                 console.log(arrVoices)
                 if(arrVoices.length===this.props.RecNo)
                 this.props.actionCreator(arrVoices);
               
            },
           
            ).catch((e) => console.log(e));
        
        // rec.stop();
    };
    // sendData=(data)=>{
    //     console.log(blob)
    //   FD=new FormData();
      
    //   console.log(FD)
    //   this.props.sendVoice(FD)
    // }
    // handlerFunction=(stream)=> {
    //     rec = new MediaRecorder(stream);
    //     rec.ondataavailable = e => {
    //       audioChunks.push(e.data);
    //       if (rec.state == "inactive"){
    //         blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
    //         const blobURL = URL.createObjectURL(blob)
    //         // recordedAudio.src = URL.createObjectURL(blob);
    //         // recordedAudio.controls=true;
    //         // recordedAudio.autoplay=true;
    //          formatData = new FormData();
    //         formatData.append('data', blob);

            
    //         this.props.sendVoice(formatData);
    //         // var file=new File([blob],"recording.wav",{type:blob.type})
    //       }
    //     }
    //   }
    //   blobToFile=(theblob)=>{
    //   const fd=new FormData();
    //   fd.set('a',theblob)
    //   return fd.get('a')
    //   }
    componentDidMount() {
    //     navigator.mediaDevices.getUserMedia({audio:true})
    //   .then(stream => {this.handlerFunction(stream)})
        navigator.getUserMedia = (navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia);
                         console.log(navigator.getUserMedia)
        navigator.mediaDevices.getUserMedia({ audio: true },
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
                <div className="jumbotron mt-5" style={{ margin: "122px" ,padding:'60px'}}>
                    <h5 style={{ margin: "22px" ,padding:'5px'}}>Say Something. After approx {this.props.RecNo*5} sec your request will be submitted </h5>

                    <audio src={this.state.blobURL} controls="controls" />
                    <button className="btn btn-lg btn-primary float-right" onClick={this.func} disabled={this.state.isRecording}>
                        Record
                </button>
                    {/* <button className="btn btn-lg btn-danger float-right" onClick={this.stop} disabled={!this.state.isRecording}>
                        Stop
                </button> */}

                </div>
                <div className="text-center mt-4">
                  {/* <MDBBtn id="StuNext" className="default-color"  style={{ marginBottom: "74px" }}  onClick={this.props.previousPage}>
                    Previous
              </MDBBtn>
                  <MDBBtn className="default-color" type="submit" style={{ marginBottom: "74px" }} onClick={this.props.onNext}>
                    Next
              </MDBBtn> */}
                </div>
            </div>
        )
    }

}

export default connect(null)(SignupSecond);
