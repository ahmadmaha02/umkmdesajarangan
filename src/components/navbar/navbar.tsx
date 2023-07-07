import React, { useState } from 'react';
import styled from 'styled-components';
import {RxHamburgerMenu } from "react-icons/rx";
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffff;
  padding: 16px;
  z-index: 999;
`;


const NavbarToggle = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    border: none;
    cursor: pointer;
  }
`;

const NavbarMenu = styled.ul<{ isOpen: boolean }>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f1f1f1;
    padding: 16px;
    z-index: 999;
  }
`;

const NavbarMenuItem = styled.li`
  margin-right: 16px;

  @media (max-width: 768px) {
    margin: 8px 0;
  }
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: #333;
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>

      <NavbarToggle onClick={toggleMenu}>
        <RxHamburgerMenu/>
      </NavbarToggle>
      <NavbarMenu isOpen={isOpen}>
        <NavbarMenuItem>
          <NavbarLink href="/">Home</NavbarLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavbarLink href="/about">About</NavbarLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
