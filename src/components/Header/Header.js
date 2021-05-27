import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import './Header.css';
import './nav.css';

const hyphen = <span className="hyphen-spacer"></span>;

export default class Header extends Component {
  
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link to='/create-profile' className="create-profile-btn">create profile</Link>
        <Link onClick={this.handleLogoutClick} to='/'>
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link to='/register'>Register</Link>{hyphen}<Link to='/login'>Log in</Link>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <h1>
          <Link to='/' className="logo">
            IndieNexus
          </Link>
        </h1>
        
        <div className="menu-container">
          {/* NOTE: put this nav button back after static app demo is tested */}
          {/* <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="menu-label-content">Menu</span>
            <span className="navicon"></span>
          </label> */}
          <ul className="menu">
            <li>
              <Link to='/artist-list' className='view-all-artists-link'> View All Artists </Link>
            </li>
            {/* {hyphen} */}
            <li className='menu-item-conditionally-authenticated'>{TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}</li>
            {/* <li>
              <form id="navbar-search-form">
                <label htmlFor="artist-search" className="navbar-search-label">
                  <span className="search-label-content">Menu</span>
                  <input type="text" id="artist-search" name="artist-search" placeholder="Search" required />
                </label>
                <button type="submit">submit</button>
              </form>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
