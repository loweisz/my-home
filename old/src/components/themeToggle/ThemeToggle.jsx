import React, { useContext } from 'react';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeButton, IconContainer } from './themeToggle.style';

function ThemeToggle() {
  const { toggleDark, isDark } = useContext(ThemeManagerContext);
  return (
    <ThemeButton aria-label="theme toggle" onClick={() => toggleDark()}>
      <IconContainer shown={isDark}>
        <FiSun className="sun" />
        <FiMoon className="moon" />
      </IconContainer>
    </ThemeButton>
  );
}

export default ThemeToggle;
