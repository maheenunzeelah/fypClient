import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './My_Account.css'
class My_Account extends Component {

  render() {
    return (
<div>

   <div class="container">
     
     <br></br>
     <br></br>
     <br></br>

      <div class="container col-sm-12 col-xl-7 col-md-10 col-lg-9 ">

        
            <div class="sub_container">

            <div  data-toggle="collapse" data-target="#plans" class="container col-md-12 col-xl-12">
              <span class="           col-12   col-sm-3   col-md-2  col-lg-5  col-xl-3 "><b>My Plans</b></span>
              <span class="sub-detail col-12  col-sm-5  col-md-4               col-xl-4">  View plans and credits</span>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>

            <div id="plans" class="collapse">

            <center  class="sub-collapse" >

            <h6><b>Education Free Plan</b></h6>
            <br></br>
            <b>Description</b>
            <p>Free credits are available to use when testing Via <b>Groups</b></p>
            <p><Link class="links"> Upgrade </Link>to save results taken via Links.</p>
            <br></br>

            <b>Monthly credits left</b>
            <br></br>
            <b>100</b>
            <br></br>
            <br></br>

            <b>Next reset</b>
            <p>Thu 28th May 2020</p>
            <p><b>100</b> credits will be available to use.</p>
            <br></br>
            <Link class="links" data-toggle="collapse" data-target="#credits">How Credits Works ? <i class="fa fa-caret-down " aria-hidden="true"></i></Link>
            <br></br>
            <div id="credits" class="collapse">
              <br></br>
              <p><b>About Credits</b></p>
              <p>Each time a test is taken by your logged in registered users one credit is used.</p>
              <p><b>Note:</b> Your 'Monthly credits left' will be next reset on the 'Next reset' date below.</p>            
              <p><Link class="links"> Upgrade </Link> now to increase your monthly credit allowance and add new features such as Certificate downloading, file uploading and remove advertising fro your test pages.</p>
            
            </div>
            <button className="btn btn-danger">View upgrade options</button>



            </center>
            
            </div>
            </div>

            <div class="sub_container">
            <div  data-toggle="collapse" data-target="#details" class="container col-xl-12">
              <span class="  col-12   col-sm-3   col-md-2   col-lg-5  col-xl-3"><b>My Details</b></span>
              <span class="sub-detail col-12  col-sm-5  col-md-12 col-lg-6  col-xl-12">Edit Account details and password</span>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>

            <div id="details" class="collapse">

            <table className= "container col-xl-11">
   
                <tr>
                  <th class="col-xl-3">name:</th>
                  <td>Izma</td>
                </tr>

                <tr>
                  <th  class="col-xl-3">Username:</th>
                  <td>izma</td>
                </tr>

                <tr>
                  <th class="col-xl-3">Password:</th>
                  <td>****</td>
                </tr>

            </table> 
                
            </div>
            </div>

            <div class="sub_container">
            <div  data-toggle="collapse" data-target="#users" class="container col-xl-12">
              <span class=" col-sm-3 col-lg-3 col-md-2"><b>My Users</b></span>
              <span class="sub-detail">No of Users under your Account</span>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>

            <div id="users" class="collapse">
            
              <center  class="sub-collapse" >
              
                  <h4><i class="fa fa-users" aria-hidden="true"></i>
                  <b> Groups (Registered Users)</b></h4>
                  <p>You currently have 4,993 user places available to use.</p>
                  <p>All accounts can have up to 5,000 users registered at any given time.
                  Maximum 1,000 users registered per Group.</p>
                  <Link to='/' class="links" >View Member and Registration code usage across all groups</Link>
                  <p>Export all users :
                    <Link class="links">By Name </Link>
                    <Link class="links by-group">  By Group</Link>
                  </p>
                  <p>Export results from your Group results pages.</p>


              </center>


            </div>
            </div>

            <div class="sub_container">
            <div  data-toggle="collapse" data-target="#assitants" class="container col-xl-12">
              <span class=" col-sm-3  col-lg-3 col-md-2"><b>Assistants</b></span>
              <span class="sub-detail">Email results and help manage your accounts</span>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>

            <div id="assitants" class="collapse">
              <br/>

               <center class="sub-collapse" >

                <p>Create Assistants with specific Permissions to login and help manage your Account or just have Test results sent to.</p>
                <p>Go to the  <Link class="links">Assistant Section </Link> </p>
              
               </center>

            </div>
            </div>

            <div class="sub_container">
            <div  data-toggle="collapse" data-target="#emails" class="container col-xl-12"><span class=" col-sm-3 col-lg-3 col-md-2"><b>Add Emails</b></span><span class="sub-detail">Have test results sent to alternate email addresses</span><i class="fa fa-caret-down" aria-hidden="true"></i></div>
            <div id="emails" class="collapse">

            <br/>

               <center class="sub-collapse" >

                <p>You can have Test results sent to alternate email addresses, other then your main account email address. Choose which email to use when assigning Tests or editing assigned Test settings.</p>
                <p>Use the   <Link class="links">Assistant Section </Link>to add new Email addresses. </p>
              
               </center>
               

            </div>
            </div>

            <div class="sub_container">
            <div  data-toggle="collapse" data-target="#receipts" class="container col-xl-12">
              <span class=" col-sm-3 col-lg-3 col-md-2"><b>Receipts</b></span>
              <span class="sub-detail">Download payment receipts</span>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>

            <div id="receipts" class="collapse">
            
            <br/>

               <center class="sub-collapse" >

                <p>You have no receipts to download at present.</p>

               </center>
            
            </div>
            </div>

            <div class="sub_container">
            <div  data-toggle="collapse" data-target="#api" class="container col-xl-12">
              <span class=" col-sm-3 col-lg-3 col-md-2"><b>API</b></span>
              <span class="sub-detail">View results URL-Access control setting</span>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
              </div>
            <div id="api" class="collapse">
           
            <center class="sub-collapse" >

            <h4><b>Overview</b></h4>
            <p>API usage is optional and allows you to have ClassMarker integrated with your website in multiple ways.</p>
            <p>You can integrate using Webhooks and/or API keys depending on your requirements.</p>
            <p>Learn more: <Link class="links">api & Webhooks Documentation</Link></p>
            <br></br>
            <b>Webhooks</b>
            <p>Webhooks allow your Web developers to have Test results securely delivered to your systems/website in <b>real time.</b></p>
            <Link class="links">View Webhooks</Link>
            <br></br>
            <br></br>
            <br></br>
            <b>API Keys:</b>
            <p>API keys allow your Web developers to have your systems/website securely request & retrieve recent Test results from ClassMarker <b>periodically.</b></p>
            <Link class="links">View Api keys</Link>

            </center>

           
           
            </div>
            </div>

            <div class="sub_container">
            <div  data-toggle="collapse" data-target="#close" class="container  col-xl-12">
              <span class=" col-sm-3 col-lg-1 col-md-1 col-xl-1"><b>Close Account</b></span>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>

            <div id="close" class="collapse">
               
            <center class="sub-collapse" >

                <div class="delete">
                <h5><b>Delete My Account Permanently</b></h5>
                <p>You can close your ClassMarker account at any time.</p>
                <p>All your data will be removed from our database when your account is closed.</p>
                <p><b>Important !</b></p>
                <p>Deleting your account is permanent and cannot be undone.</p>
                </div>
            
            <br></br>

            <b>Reason for closing account? </b>
            <p>We read and appreciate all feedback, this helps us make ClassMarker better for everyone</p>
            <textarea class="form-control">

            </textarea>
            <br></br>
            <br></br>
            <button className="btn btn-danger">Next</button>
            <br></br>
            <br></br>
            <p>Have a question instead? <Link class="links">Contact Us </Link></p>
            
            
            </center>
            
            </div>
            </div>

            



      </div>


      <div class="container" >
      <div class="container col-sm-6 col-xl-5 col-md-4 col-10 col-lg-4"> 

      <div class="row side-box"> 
      <h5><b>Need more Credits</b></h5>
      <p>You can securely and instantly purchase </p>
      <p>more credits at any time.</p>
      <br></br>
      <br></br>
      
      <Link className="btn btn-danger">View upgrade options</Link>
      </div>

      <div class="row side-box">
      <h5><b>New feature announcements!</b></h5>
      <p>You can securely and instantly purchase </p>
      <p>more credits at any time.</p>
      <p></p>
      <button className="btn btn-danger">View upgrade options</button>
     
      </div>


      </div>
      </div>


</div>
            


</div>

        );
  }
}

export default My_Account;
