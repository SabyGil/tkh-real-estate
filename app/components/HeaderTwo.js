import React from 'react';
import { NavLink } from 'react-router-dom';

class HeaderTwo extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div className='listings-header'>
      <header>
        <div className="logo">
          <NavLink exact to='/'>
            Logo
          </NavLink>
          </div>

        <nav>
          <a href="#">create ads</a>
          <a href="#">About Us</a>
          <a href="#">Log In</a>
          <a href="#" className="register-btn">Register</a>
        </nav>
      </header>
    </div>
    );
  }
}
export default HeaderTwo;
