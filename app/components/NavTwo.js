import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavTwo = () => {
  return (
    <nav>
      <ul>
        <NavLink exact to="/listings">
          <li>
            <button>Click here to search through listings</button>
          </li>
        </NavLink>
      </ul>
    </nav>
    // <div>
    //   <NavLink></NavLink>
    // </div>
  );
}
