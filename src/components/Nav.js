import React from 'react';
import icon from '../assets/user.svg';

const NavBar = () => (
  <nav className="">
    <div className="panel-bg">
      <ul>
        <li className="Bookstore-CMS">
          <a href="https://booksttore.herokuapp.com/">BOOKSTORE CMS</a>
        </li>
        <li className="BOOKS">BOOKS</li>
        <li className="CATEGORIES">CATEGORIES</li>
        <li>
          <img alt="icon" src={icon} className="Mask" />
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
