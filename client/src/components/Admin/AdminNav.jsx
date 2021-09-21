import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
class AdminNav extends Component {

  render() {

    return (
      <ul className='admin-nav'>
        <li>
          <NavLink to='/admin'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to='/admin/books'>Books</NavLink>
        </li>
        <li>
          <NavLink to='/admin/blog'>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={this.props.signOut}>SignOut</NavLink>
        </li>
      </ul>
    );
  };
};

export default AdminNav;