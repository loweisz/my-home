import React from 'react';
import { StyledFooter, FooterInner } from './footer.styles';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterInner>
        <ThemeToggle />
        <span>2020 Made by Lorenz Weiß.</span>
      </FooterInner>
    </StyledFooter>
  );
};

export default Footer;
