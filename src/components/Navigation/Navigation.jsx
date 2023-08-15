import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavList, NavListItem } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <NavLink to="/">Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavListItem>
      </NavList>
    </nav>
  );
};

export default Navigation;
