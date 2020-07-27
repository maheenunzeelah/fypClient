import React, { Component } from 'react';
import '../css/Preview.css'
import { Link } from 'react-router-dom'

class Preview extends Component {

    render() {
        return (

            <div class='container'>


                <div class="w3-container" id="main_nav">

                    <div class="w3-row">
                        <div class="w3-quarter">
                            Select Test
              </div>
                        <div class="w3-quarter">
                            Assign
              </div>
                        <div class="w3-quarter">
                            Setting
              </div>
                        <div class="w3-quarter">
                            Review
              </div>
                    </div>

                </div>



                <div id="Assign_page">

                    <div class="container">
                        <p><i className="fa fa-file-o fa-2x" aria-hidden="true"></i> Test</p>
                    </div>

                    <br></br>

                    <div class="container" id="Assign_content">

                        <div class="container">


                            <br></br>
                            <br></br>

                            <div class="row" id="assign_options">

                                <div class='col-lg-5' id="g_assign">

                                    <center><i className="fa fa-users fa-1x" aria-hidden="true"></i> Via Group</center>
                                    <br></br>
                                    <center><strong>Test registered users.</strong></center>
                                    <br></br>
                                    <p>Group members will log in via the ClassMarker.com website where they can access the tests you have assigned to their Group. </p>
                                    <p>Great for regular testing of the same user(s). </p>
                                    <ul>
                                        <li>Teacher / students</li>
                                        <li>Employer / staff members</li>
                                    </ul>
                                    <p>You can assign multiple tests to multiple groups with different settings each time as you require.</p>
                                    <p>User Manual : <Link to="/"> Learn more about giving tests.</Link></p>
                                    <hr></hr>
                                    <button type="button" class="collapsible btn btn-danger" id="group" data-toggle="collapse" data-target="#groupdetails" >Assign to group</button>


                                    <div id="groupdetails" class="collapse">
                                        <br></br>

                                        <div class='row'>
                                            <h4>1 Select Groups</h4>
                                        </div>

                                        <br></br>

                                        <form action="/action_page.php">
                                            <input type="checkbox" name="test1" value=""></input>
                                            <label for="test1"> Test1</label><br></br>
                                            <input type="checkbox" name="test2" value=""></input>
                                            <label for="test2"> Test2</label><br></br>
                                            {/*<input type="submit" value="Submit"></input> */}
                                        </form>

                                        <br></br>

                                        <strong>This Test is already Assigned to :</strong>

                                        <div class='row'>
                                            <br></br>
                                            <ul>
                                                <li>test</li>
                                                <Link to=''>View assigned setting</Link>
                                                <hr></hr>
                                                <li>test2</li>
                                                <Link to=''>View assigned setting</Link>
                                                <hr></hr>
                                            </ul>
                                        </div>

                                        <div class='row'>
                                            <h4>2 Pre-set settings</h4>
                                        </div>

                                        <br></br>

                                        <Link to=''><i class="fa fa-cog" aria-hidden="true"></i> Select from Existing Settings</Link>

                                        <br></br>

                                        <p>Using default settings at present</p>
                                        <button class="btn btn-danger">Next</button>

                                        <hr></hr>

                                        <Link><i class="fa fa-plus" aria-hidden="true"></i> Create new Group</Link>

                                    </div>

                                </div>

                                <div class=' col-lg-1' id="OR">
                                    <center>OR</center>
                                </div>



                                <div class='col-lg-5' id="l_assign">
                                    <center><i className="fa fa-link fa-1x" aria-hidden="true"></i> Via Link</center>
                                    <br></br>
                                    <center><strong>No user registration required.</strong></center>
                                    <br></br>
                                    <p>Create a Link URL that can be sent out via email to users, or add/embed the test into your website using the code we provide.  </p>
                                    <p>Great for 'once off' or 'bulk testing' and features:</p>
                                    <ul>
                                        <li>Themes - brand your test with logo / colors.</li>
                                        <li>Access Lists - control test access / password protection.</li>
                                    </ul>
                                    <p>You can create one link per test, as well as create multiple links for the same test to edit settings or keep results separated.</p>
                                    <p>User Manual : <Link to="/"> Learn more about giving tests.</Link></p>
                                    <hr></hr>

                                    <button type="button" class="collapsible btn btn-danger" id="group" data-toggle="collapse" data-target="#Linkdetails" >Assign to Link</button>


                                    <div id="Linkdetails" class="collapse">
                                        <br></br>
                                        <div class='row'>
                                            <h4>Create New Link</h4>
                                        </div>

                                        <br></br>

                                        <div class='row'>
                                            <p> <strong> Pre-set settings</strong> </p>
                                        </div>

                                        <br></br>

                                        <Link to=''><i class="fa fa-cog" aria-hidden="true"></i> Select from Existing Settings</Link>

                                        <br></br>

                                        <p>Using default settings at present</p>
                                        <button class="btn btn-danger">Next</button>

                                        <hr></hr>

                                    </div>


                                </div>



                            </div>





                        </div>


                    </div>

                </div>


            </div>

        );
    }
}

export default Preview;
