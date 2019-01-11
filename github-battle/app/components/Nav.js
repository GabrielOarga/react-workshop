var React = require('react');
var Link = require('react-router-dom').Link; /* Use if only link is required */
var NavLink = require('react-router-dom').NavLink; /* Use if link should also be styled */

function Nav() {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;