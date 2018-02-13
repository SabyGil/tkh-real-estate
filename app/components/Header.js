import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
  render(){
    return(
      <div className='main-header'>
        <header>
          <div className='logo'>
            <NavLink exact to='/'>
                Home
            </NavLink>
          </div>
          <div className='nav-container'>
            <NavLink exact to='/listings'>
              Listings
            </NavLink>
          </div>
        </header>
      </div>
    );
  }
}
