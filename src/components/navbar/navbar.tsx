import React, { useState } from 'react';
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavbarContainer = styled.nav`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:space-between;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffff;
  padding: 16px;
  z-index: 999;
  
 
`;
const Logo =styled.div`
  font-family: poppins;
  font-weight: 700;
  font-size: 22px;
  color: black;
  margin:0 50px;
  span{
    color: #1BC46E;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
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
 margin:0 50px;
  list-style-type: none;

  padding: 0;
  display: flex;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f3f3f3b7;
    padding: 16px;
    z-index: 999;
    margin:0;
  }
`;

const NavbarMenuItem = styled.li`
  margin-right: 16px;
  
  @media (max-width: 768px) {
    margin: 8px 0;
  }
`;

const NavbarLink = styled.a`
  color: var(--primary-foundation-grey-normal-hover, #2B2B2B);
/* Heading 4/Medium/22 */
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 36px;
letter-spacing: 1px;
`;

interface MenuItem {
  title: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { title: 'Home', url: '/' },
  { title: 'Product', url: '/Product' },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarToggle onClick={toggleMenu}>
        <RxHamburgerMenu />
      </NavbarToggle>
      <Logo>UMKMJarangan
        <span>.com</span>
      </Logo>
      <NavbarMenu isOpen={isOpen}>
        {menuItems.map((menuItem) => (
          <NavbarMenuItem key={menuItem.url}>
            <NavbarLink href={menuItem.url}>{menuItem.title}</NavbarLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
