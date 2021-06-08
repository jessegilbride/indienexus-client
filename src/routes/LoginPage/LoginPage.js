import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/'; // *** huh?
    history.push(destination);
  }

  render() {
    return (
      <section className='LoginPage'>
        <h2 className='page-heading'>Login</h2>
        <p className='register-message'>Don't have an account yet? <Link to='/register' className='register-link'>Register Here</Link></p>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />

        <p>sample login (from database seed):</p>
        <p>
          username: jwhitlock
          <br />
          password: swSf5Hti
        </p>
      </section>
    )
  }
}
