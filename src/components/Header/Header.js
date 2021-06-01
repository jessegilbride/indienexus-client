import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import './Header.css';
import './nav.css';

// const hyphen = <span className="hyphen-spacer"> / </span>;

export default class Header extends Component {

  handleMobileNavUsage = () => {
    const menuToggle = document.querySelector('input#menu-btn');
    if (menuToggle.checked) {
      menuToggle.checked = false;
      return; // unnecessary?
    } else return;
  }
  
  handleLogoutClick = () => {
    this.handleMobileNavUsage();
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  /* handleSearchSubmit => (event) {
    event.preventDefault();
    const { artist_search } = event.target;
  } */

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link to='/create-profile' className='create-profile-btn' onClick={this.handleMobileNavUsage}>Create profile</Link>
        <Link onClick={this.handleLogoutClick} to='/' className='login-logout-link'>Log out</Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        {/* <Link to='/register'>Register</Link>{hyphen}<Link to='/login'>Log in</Link> */}
        <Link to='/login' className='login-logout-link' onClick={this.handleMobileNavUsage}>Log in</Link>
      </div>
    );
  }

  render() {
    return (
      <nav role="navigation">
        <Link to='/' className='logo' onClick={this.handleMobileNavUsage}>IndieNexus</Link>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='menu-label-content'>Menu</span>
          <span className='navicon'></span>
        </label>
        <ul className='menu'>
          {/* {<li className='listItem-search'>
            <form id='navbar-search-form' onSubmit={this.handleSearchSubmit}>
              <label htmlFor='artist_search' className='navbar-search-label'>
                <span className='search-label-content'>Search</span>
                <input type='text' id='artist_search' name='artist_search' placeholder='Search' required />
              </label>
              <button type='submit'>submit</button>
            </form>
          </li>} */}
          <li className='listItem-viewAllArtists'><Link to='/artist-list' className='view-all-artists-link' onClick={this.handleMobileNavUsage}> View All Artists </Link></li>
          <li className='listItem-logIn-logOut'>{TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}</li>
        </ul>
      </nav>
    );
  }
}
