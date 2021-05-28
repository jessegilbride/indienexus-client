import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />

        <p>sample login (from database seed):</p>
        <p>
          username: jwhitlock
          <br />
          password: swSf5Hti
        </p>
      </Section>
    )
  }
}
