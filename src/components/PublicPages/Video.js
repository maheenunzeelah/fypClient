import React,{Component} from 'react';
import video from '../../video.mp4';
import '../../css/Main.css';
import 'tachyons';
class Video extends Component{
    render()
    {
        return <div id="hsty">
             <h4>E-Catechism Demo</h4>
        <video  width= "550px" height="200px" controls src={video} type="video/mp4"></video>
     
        </div>
    }
}
export default Video;