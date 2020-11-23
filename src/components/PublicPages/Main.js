import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../css/Main.css';
import 'tachyons';
import test1 from '../../images/test1.jpg';
import test2 from '../../images/test2.jpg';
import test3 from '../../images/test3.jpg';
import test4 from '../../images/test4.jpg';
import Video from './Video.js';

class Main extends Component {
    render() {
        //backgroundColor:"rgb(7, 3, 54)"
        //className="rgba-black-strong "
        return (
            <div style={{ color: "#14274e" }}>
                <div className="container  mt-5 ">
                    <div className="row " >
                        <div className="containercol-lg-6 col-md-6  col-sm-12 " >
                            <div>
                                <h1 className="pink-text display-4 font-weight-bold">E-Catechism</h1>

                                <p className="introPara">
                                    An online assessment website for conducting tests effectively. It will reduce
                                     paperwork and provide you easy way for creating and checking tests, preparing results and much more.
                                 </p>

                                <Link to="/signupas" className="text-reset"> <div className='btn btn-lg pink lighten-4 ' > Register Now </div></Link>

                            </div>
                            <div>

                                <div style={{ marginTop: "50px" }}  >
                                    <h4 style={{color:"#0099CC"}} > Create Custom Tests & Exams Online</h4>
                                   <ul className="list">
                                    <li><i className="fas fa-arrow-right pink-text mr-2"></i> Secure & private</li>
                                    <li><i className="fas fa-arrow-right pink-text mr-2"></i> Easy to define Test settings</li>
                                    <li><i className="fas fa-arrow-right pink-text mr-2"></i> No software installations required</li>
                                    <li><i className="fas fa-arrow-right pink-text mr-2"></i> Give Exams with public & private options</li>
                                    <li><i className="fas fa-arrow-right pink-text mr-2"></i> Results automatically graded & viewable in real time</li>
                                    <li><i className="fas fa-arrow-right pink-text mr-2"></i> PCs, Macs, iPad, iPhone, Android, Chromebook & more</li>
                                  </ul>
                                </div>
                                <br />
                                <button className="btn btn-lg pink lighten-4  black-text">
                                E-Catechism Features</button>
                            </div>
                        </div>
                        <div className="col-lg-6 " >
                            <img src={test3} alt=".." className="imgAnim w3-animate-opacity" style={{ marginTop: "50px", width: "380px", height: "30%", border: "solid 2px" }} />
                            <img src={test2} alt=".." className="img1Pos w3-animate-opacity" style={{ width: "350px", border: "solid 2px" }} />
                            <img src={test4} alt=".." className="img2Pos w3-animate-opacity" style={{ width: "350px", border: "solid 2px" }} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Main;