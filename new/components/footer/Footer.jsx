import React from 'react';
import { StyledFooter, FooterInner } from './footer.styles';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterInner>
        <ThemeToggle />
        <span><strong>It's the year {new Date().getFullYear()}</strong> and this page is built and designed by <strong>Lorenz</strong></span>
      </FooterInner>
    </StyledFooter>
  );
};

export default Footer;
