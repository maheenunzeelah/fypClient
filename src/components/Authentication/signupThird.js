import React , {Component} from 'react';
import { connect } from 'react-redux';
import { ReactMic } from 'react-mic';

let formatData;

let arrVoices=[];
class SignupThird extends Component{
    state={
        record:false
    }
      startRecording = () => {
        this.setState({ record: true });
      }
     
      stopRecording = () => {
        this.setState({ record: false });
      }
     
      onData(recordedBlob) {
        // console.log('chunk of real-time data is: ', recordedBlob);
      }
     
      onStop=(recordedBlob)=> {
        console.log('recordedBlob is: ', recordedBlob);
        // const blob= new Blob(recordedBlob);
        // console.log(blob)
        arrVoices.push(recordedBlob.blob)
        if(arrVoices.length===this.props.RecNo)
        this.props.actionCreator(arrVoices);

      }
     
      render() {
        return (
          <div>
            <ReactMic
              record={this.state.record}
              visualSetting="sinewave"
              className="sound-wave"
              onStop={this.onStop}
              onData={this.onData}
              strokeColor="black"
              backgroundColor="white"
              mimeType="audio/wav"  
              bitRate={24000}  
              />
            <button onClick={this.startRecording} type="button">Start</button>
            <button onClick={this.stopRecording} type="button">Stop</button>
          </div>
        );
      }
}

export default connect(null)(SignupThird);