import React from 'react';
import { StyledFooter, FooterInner } from './footer.styles';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterInner>
        <ThemeToggle />
        <span>2020 Built and designed by <strong>Lorenz Weiß.</strong></span>
      </FooterInner>
    </StyledFooter>
  );
};

export default Footer;
