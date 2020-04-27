import React from 'react';
import { StyledFooter } from './footer.styles';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Footer = () => {
  return (
    <StyledFooter>
      <ThemeToggle />
      <span>2020 Made by Lorenz Weiß.</span>
    </StyledFooter>
  );
};

export default Footer;
