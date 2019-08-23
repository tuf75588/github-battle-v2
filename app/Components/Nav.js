import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';

function Nav() {
  const activeStyle = {
    color: `rgb(187,46,31)`,
  };
  return (
    <ThemeConsumer>
      {({ theme, toggle }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <NavLink
                to='/'
                exact
                activeStyle={activeStyle}
                className='nav-link'
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/battle'
                activeClassName='active'
                activeStyle={activeStyle}
                className='nav-link'
              >
                Battle
              </NavLink>
            </li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className='btn-clear'
            onClick={toggle}
            type='button'
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
export default Nav;
