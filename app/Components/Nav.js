import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';

const activeStyle = {
  color: 'rgb(187,46,31)',
};
function Navbar() {
  return (
    <ThemeConsumer>
      {({ theme, toggle }) => (
        <nav className='row space-between'>
          <ul className='nav row'>
            <li>
              <NavLink
                exact
                to='/'
                activeStyle={activeStyle}
                className='nav-link'
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/battle'
                activeStyle={activeStyle}
                className='nav-link'
              >
                Battle
              </NavLink>
            </li>
          </ul>
          <button
            onClick={toggle}
            style={{ fontSize: 30 }}
            className='btn-clear'
            type='button'
          >
            {theme === 'light' ? '🔦' : '🌞'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
export default Navbar;
