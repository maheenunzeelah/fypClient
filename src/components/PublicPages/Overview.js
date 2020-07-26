import React from 'react';
import img from'../../images/create test.png';
import img1 from'../../images/results.jpeg';
import img2 from '../../images/statistics.png';
import Card from './card';
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot} from '@material-ui/lab';


function Overview(){
    return(
    <div className="Overview" >
    <Card />
      <div className="container" >
        <div className="jumbotron" style={{border:"solid pink ", marginTop:"30px",backgroundColor:"rgb(1, 4, 20)", color:'#90caf9 '}}>
          <div style={{ width:'100%'}}>
          <Timeline style={{position:'relative', right:'20%'}}>
            <TimelineItem >
          <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="m-5">
              <div className="row">
               <div className="col-lg-12" style={{ marginbOttom:'30px'}}>
                <h4>Create Test</h4>
                </div>
               </div>
               <div className="row pt-3">
                <div className="col-lg-4">
                 <img src={img}  />
                </div>
                <div className="col-lg-8" >
                 <p style={{marginTop:"50px" }} >Create Tests with set Questions or have Questions selected at random from your Question bank each time it's taken.</p>          
                </div>  
               </div>  
               </TimelineContent>
               </TimelineItem>
               <TimelineItem>
          <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="m-5">
               <div className="row">
                <div className="col-lg-12">
                <h4>View Results</h4>
                </div>
                </div>
                <div className="row pt-3">
                <div className="col-lg-4">
                 <img src={img1} style={{width:"220px"}} />
                </div>
                <div className="col-lg-8">
                <p style={{marginTop:"50px"}}>Create Tests with set Questions or have Questions selected at random from your Question bank each time it's taken.</p>    
                </div>
              </div>
              </TimelineContent>
              </TimelineItem>
              <TimelineItem>
          <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="m-5">
              <div className="row">
                <div className="col-lg-12">
                <h4 className="pb-3">Analyse statistics</h4>
                </div>
                </div>
                <div className="row align-item-center">
                <div className="col-lg-4">
                 <img src={img2} style={{width:"220px"}} />
                </div>
                <div className="col-lg-8">
                <p style={{marginTop:"50px"}}>Create Tests with set Questions or have Questions selected at random from your Question bank each time it's taken.</p>    
                </div>
              </div>        
              </TimelineContent>
              </TimelineItem>
               </Timeline>
          </div>
          </div>
        </div>

    </div>
    );
}

export default Overview;