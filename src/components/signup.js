import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SignupFirst from './signupFirst'
import Tests from './Newtest';
import SignupSecond from './signupSecond';

class Signup extends Component {
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

  render() {
    const {onNext} = this.props
    const { page } = this.state
    return (
      <div>
        {page === 1 && <SignupFirst onNext={this.nextPage} />}
        {page === 2 && (<SignupSecond 
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

Signup.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Signup