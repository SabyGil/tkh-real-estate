import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
  render(){
    return(
      <header>
        <div className='logo'>
          <NavLink exact to='/'>
              Home
          </NavLink>
        </div>
        <nav className='nav-container'>
          <ul>
            <NavLink exact to='/listings'>
              <li className='nav-listings'>
                Listings
              </li>
            </NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}
