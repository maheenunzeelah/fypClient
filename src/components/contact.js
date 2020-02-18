import React, {Component} from 'react'
import '../css/contact.css';


	
class Contact extends Component{
	render(){
	  return (
  
		<div className="container" id="main">
		  <div className="row">
			<div className="col-lg-1" />
			<div className="col-lg-4 col-md-8 col-xs-8 col-sm-6" id="box1">
			  <h5 style={{fontWeight: 'bold', display: 'inline-block'}}>Step by Step instructions</h5>
			  <br />
			  <br />
			  <a className="btn btn-primary btn-sm active" id="view_manual" href>View User Manual</a>
			  <br />
			</div>
			<div className="col-lg-1" />
			<div className="col-lg-4 col-md-8 col-xs-8 col-sm-6" id="box2">
			  <h5><label style={{fontWeight: 'bold'}} htmlFor="helpsearch">Search Help/FAQ</label></h5>
			  <form action="/a/help/?trk=contactus" method="get">
				<div className="row">
				  <div className="col-8">
					<input name="query" className="form-control" style={{height: '25px'}} type="text" />
				  </div>
				  <div className="col-3">
					<button className="btn btn-danger" id="faq" style={{height: '25px'}} type="submit" value="Submit Query" >Submit</button>
				  </div>
				</div>
			  </form>
			  <a style={{fontSize: '12px', color: 'red'}} href="/a/help/?trk=contactus">View the FAQ</a>
			</div>
		  </div>
		  <br />
		  <br />
		  <div className="row">
			<div className="col-lg-1" />
			<div className="col-lg-4 col-md-8 col-xs-8 col-sm-6" style={{marginLeft: '18px', marginRight: '18px'}}>
			  <h5>Contact ClassMarker</h5>
			  <p>ClassMarker offers Support 7 Days a Week</p>
			  <form action="/action_page.php">
				<div className="form-group">
				  <label htmlFor="name">Your Name *</label>
				  <input className="form-control" id="name" type="text" />
				</div>
				<div className="form-group">
				  <label htmlFor="name">ClassMarker Username (If registered)</label>
				  <input className="form-control" id="name" type="text" />
				</div>
				<div className="form-group">
				  <label htmlFor="email">Your Email Address *</label>
				  <input className="form-control" id="email" type="email" />
				</div>
				<div className="form-group">
				  <label htmlFor="sel1">Select list:</label>
				  <select className="form-control" id="sel1">
					<option selected="selected" value>-- Select one --</option>
					<option value="Q">General Question</option>
					<option value="SQ">Sales Query</option>
					<option value="B">Accounts</option>
					<option value="F">Feedback</option>
					<option value="SG">New Feature Suggestion</option>
					<option value="NV">New Vendor Set Up</option>
				  </select>
				</div>
				<div className="form-group">
				  <label htmlFor="name">Subject *</label>
				  <input className="form-control" id="name" type="text" />
				</div>
				<div className="form-group">
				  <label htmlFor="name">Question / Message *</label>
				  <textarea name="body" title="Please be as descriptive as possible. This will better help us help you!<br/><br/>This box will expand as you type." className="form-control" id="contact_body" rows={2} cols={40} defaultValue={""} />
				</div>
				<p style={{fontSize: '15px'}}><strong>Please check</strong>  your email address above is correct to ensure we can reply to you.</p>
				<div className="checkbox">
				  <label><input type="checkbox" /> Remember me</label>
				</div>
				<button className="btn btn-danger" type="submit">Email Us</button>
			  </form>
			</div>
			<div className="col-lg-1" />
			<div className="col-lg-5 d-none d-lg-block d-xl-block">
			  <h5>Video Help</h5>
			  <i className="fa fa-video-camera" aria-hidden="true" style={{color: 'red'}} />
			  <a style={{color: 'red', fontSize: '13px'}} href>Class marker demonstration video</a>
			  <br />	
			  <video width={300} height={200} id="video" controls>
				<source src="https://www.youtube.com/watch?v=pdoM2FzGoog" />
				<source src="movie.ogg" type="video/ogg" />
				Your browser does not support the video tag.
			  </video>
			</div>
		  </div>
		</div>
	  );
	}
}
       

export default Contact;

