import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
  render(){
    return(
      <div className='container'>
        <header>
          <div className='left-menu'>
            <div className='logo'>
              <NavLink exact to='/'>
                  LOGO
              </NavLink>
            </div>
          </div>
          <div className='right-menu'>
            <NavLink exact to='/listings'>
              Listings
            </NavLink>
          </div>
        </header>
      </div>
    );
  }
}
