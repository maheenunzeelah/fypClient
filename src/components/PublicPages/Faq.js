import React from 'react';
import img from '../../images/faq.jpg';
export const FAQ=()=>{
    return(
        <div className="container">
            <center><h1 className="mt-5 font-weight-bold">Frequently Asked Questions</h1></center>
            <div className="row">
            <div className="col-md-6">
           
            <ol className="container mt-5 mb-5">
                <li >
                  <h5 className="font-weight-bold">How this website works?</h5>
                  <p>Ans. We will recommend you to watch Demo video</p>
                </li>
                <li className="mt-3"> 
                  <h5 className="font-weight-bold">How a student can access test</h5>
                  <p>Ans. By logging into its account</p>
                </li>
                <li className="mt-3">
                  <h5 className="font-weight-bold">How the teacher can create test?</h5>
                  <p>Ans. Test can be created from teacher's panel according to course</p>
                </li>
                <li className="mt-3">
                  <h5 className="font-weight-bold">How can teacher assign test to students</h5>
                  <p>Ans. The teacher has to make a group of students and then assign test to that group</p>
                </li>
                <li className="mt-3">
                  <h5 className="font-weight-bold">Can 1 student be added in more than 1 group?</h5>
                  <p>Ans. Yes, it's possible</p>
                </li>
                <li className="mt-3">
                  <h5 className="font-weight-bold">What type of questions a teacher can add in a test</h5>
                  <p>Ans. For now, it's either T/F or MCQ's but in future descriptive questions can also be added</p>
                </li>
            </ol>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 d-flex flex-column justify-content-center" >
             <img src={img} width="500px" alt="No image"/>
            </div>

            </div>
            
         
        </div>
    )
}