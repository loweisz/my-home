import React from 'react';
import { StyledFooter } from './footer.styles';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Footer = () => {
  return (
    <StyledFooter>
      <ThemeToggle />
      <span>© 2020 Copyright Lorenz Weiß. All rights reserved.</span>
    </StyledFooter>
  );
};

export default Footer;
