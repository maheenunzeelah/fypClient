import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginFirst from './loginFirst'
import Tests from '../Tests/Newtest';
import SignupSecond from './signupSecond';
import { connect } from 'react-redux';
import {studentLogin} from '../../actions'; 
import { Field, reduxForm, isPristine } from 'redux-form';

class Login extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  
  nextPage() {
  
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }
  handleSubmit=()=>{
    
  }

  render() {
    
    const { page } = this.state
    const {onSubmit}=this.props
    return (
      <div>
        {page === 1 && <LoginFirst onNext={this.nextPage} />}
        {page === 2 && (<SignupSecond actionCreator={this.props.studentLogin} RecNo={1}
              previousPage={this.previousPage}
              onNext={this.nextPage}
              />
        //   <WizardFormSecondPage
        //     previousPage={this.previousPage}
        //     onSubmit={this.nextPage}
        //   />
        )}
        {/* {page === 3 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )} */}
      </div>
    )
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default connect(null, {studentLogin})(Login); 