import React, { Component } from 'react';
import { renderField, renderDepartField, renderBatchField } from '../renderField';
// import '../../css/contact.css';
import Pdf from '../../images/USER_GUIDE.pdf';
import img from '../../images/contact.png';
import { Link } from 'react-router-dom';
import { Field, reduxForm, isPristine } from 'redux-form';
import { connect } from 'react-redux';
import validate from '../validate';
import Video from './Video';

class Contact extends Component {
	handleSubmit = (formValues) => {

	}
	render() {
		return (

			<div className="container black-text" >
				<center><img src={img} style={{ height: "200px" }} /><h2 className="m-5 font-weight-bold">Contact Us</h2></center>
				<div >
					<form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error mb-5" style={{ color: " #1C2331", margin: '10px 70px', paddingBottom: '100px' }}>
						<div className="row">
							<div className="col-md-6">
								<Field name="Name" type="text" component={renderField} label="Name" />
								<Field name="email" type="email" component={renderField} label="Email" />
								<Field name="number" type="number" component={renderField} label="Phone No." />
								<label>Query</label>
								<Field name="query" type="textarea" component="textarea" label="Query" className="pink lighten-5 border border-dark" />
							</div>
							<div className="col-md-2"></div>
							<div className="col-md-4 d-flex flex-column justify-content-between" >
								<br />
								<br />
								<a className="btn btn-lg btn-outline-dark" type="button" href={Pdf} target="_blank">View User Manual</a>
							
								<br />
								<Video />
							</div>
						</div>

					</form>
				</div>
			</div>
		);
	}
}

const formWrapped = reduxForm({
	form: 'Contact',
	destroyOnUnmount: false,
	validate
})(Contact)
export default connect(null, null)(formWrapped);

