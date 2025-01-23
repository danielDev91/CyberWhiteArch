import React from 'react';
import {
  HeaderContainer,
  LeftSection,
  Nav,
  RightSection,
  NavLink,
  Logo,
  Dropdown,
  DropdownContent,
} from '../Header/Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      {/* Left Section */}
      <LeftSection>
        <NavLink href="/account">Your Account</NavLink>
      </LeftSection>

      {/* Center Navigation */}
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about-us">About Us</NavLink>
        <NavLink href="/community">Community</NavLink>
        <Dropdown>
          <NavLink href="/tools">Tools</NavLink>
          <DropdownContent>
            <a href="/tools/doc">Docs</a>
            <a href="/tools/link">Links</a>
            <a href="/tools/courses">Courses</a>
          </DropdownContent>
        </Dropdown>
      </Nav>

      {/* Right Section */}
      <RightSection>
        <Logo src="" alt="Logo" />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;