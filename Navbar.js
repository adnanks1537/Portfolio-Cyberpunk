import React, { useState } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const NavbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #111;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-right: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #ff00ff;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #ff00ff;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    bottom: 60px;
    left: 0;
    width: 100%;
    background: #111;
    padding: 10px;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <HamburgerMenu onClick={toggleMenu}>
        {isOpen ? '✖️' : '☰'}
      </HamburgerMenu>
      <Menu isOpen={isOpen}>
        <NavMenu>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavMenu>
        <SocialContainer>
          <IconLink href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </IconLink>
          <IconLink href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
        </SocialContainer>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
