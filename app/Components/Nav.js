import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/theme';
import { useHover } from './Hover';

const activeStyle = {
  color: 'rgb(187,46,31)',
};
function Navbar() {
  const { theme, toggle } = React.useContext(ThemeContext);
  const [hovering, attrs] = useHover();
  console.log(hovering);
  return (
    <nav className='row space-between'>
      <ul className='nav row'>
        <li>
          <NavLink exact to='/' activeStyle={activeStyle} className='nav-link'>
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink to='/battle' activeStyle={activeStyle} className='nav-link'>
            Battle
          </NavLink>
        </li>
      </ul>
      <button
        style={{ fontSize: 30 }}
        className='btn-clear'
        type='button'
        onClick={toggle}
      >
        {theme === 'light' ? '🔦' : '🌞'}
      </button>
    </nav>
  );
}
export default Navbar;
