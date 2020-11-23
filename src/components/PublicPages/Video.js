import React,{Component} from 'react';
import video from '../../video.mp4';
import '../../css/Main.css';
import 'tachyons';
class Video extends Component{
    render()
    {
        return <div id="hsty">
             <h2 className="pink-text font-weight-bold mt-r pb-3">E-Catechism Demo</h2>
        <video  width= "400px" height="200px" controls src={video} type="video/mp4"></video>
     
        </div>
    }
}
export default Video;