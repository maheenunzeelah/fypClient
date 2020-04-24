import React from 'react';
import { Link, withRouter } from 'react-router-dom'


function Tab() {
    return (
        <div>
            {/* style={{backgroundColor:"rgb(7, 3, 54)"}} */}
            <div className="container pink lighten-4" id='tab'  >

                <div class="row" >
                    <Link to='/dashboard' className="w3-bar-item w3-button tablink" style={{color:"rgb(7, 3, 54)"}}><i class="fa fa-window-maximize w3-margin-right" aria-hidden="true"></i>Test</Link>
                    <Link to='/dashboard/QuestionBank' style={{color:"rgb(7, 3, 54)"}} class="w3-bar-item w3-button tablink" ><i class="fa fa-window-restore w3-margin-right" aria-hidden="true"></i>Question Bank</Link>
                    <Link to='#' class="w3-bar-item w3-button tablink"style={{color:"rgb(7, 3, 54)"}} ><i class="fa fa-list w3-margin-right" aria-hidden="true "></i>Categories</Link>
                    <Link to='#' class="w3-bar-item w3-button tablink" style={{color:"rgb(7, 3, 54)"}} ><i class="fa fa-certificate w3-margin-right" aria-hidden="true "></i>Certificates</Link>

                </div>
            </div>
        </div>
    )
}
export default Tab;