import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav-link'>
      <ul className='row-nav'>
        <li>
          <NavLink activeClassName='active' exact to='/'>
            Home
          </NavLink>
        </li>
        <NavLink activeClassName='active' to='/battle'>
          Battle
        </NavLink>
      </ul>
    </nav>
  );
}
export default Nav;
