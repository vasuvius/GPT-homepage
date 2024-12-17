import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const dartmouthGreen = '#006747';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, ${dartmouthGreen} 50%, #003d33);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  position: sticky;
  top: 0;
  width: 100%;
`;

const NavbarLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #ff6347;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    color: #ff6347;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #ff6347;
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarLink to="/" activeClassName="active">
        Home
      </NavbarLink>
      <NavbarLink to="/resume" activeClassName="active">
        Resume
      </NavbarLink>
      <NavbarLink to="/projects" activeClassName="active">
        Projects
      </NavbarLink>
    </NavbarWrapper>
  );
};

export default Navbar;
