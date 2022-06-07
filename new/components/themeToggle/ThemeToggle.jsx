import React, { useContext } from 'react';

import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeButton, IconContainer } from './themeToggle.style';
import { DarkThemeContext } from '../../pages/_app';

function ThemeToggle() {
  const { setIsDarkTheme, isDarkTheme } = useContext(DarkThemeContext);
  return (
    <ThemeButton
      aria-label="theme toggle"
      onClick={() => setIsDarkTheme(oldValue => !oldValue)}
    >
      <IconContainer shown={!isDarkTheme}>
        <FiSun className="sun" />
        <FiMoon className="moon" />
      </IconContainer>
    </ThemeButton>
  );
}

export default ThemeToggle;
