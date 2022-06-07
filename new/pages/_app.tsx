import '../styles/index.css'
import { ThemeProvider } from 'styled-components';
import { createContext, useState } from 'react';

const theme = {
  light: {
    white: '#eee',
      black: '#1d2a3a',
      lightRed: '#F5DDDE',
      red: '#E8ACA3',
      darkRed: '#A7646A',
      lightGrey: '#ccc',
      grey: '#DFE0DF',
      darkGrey: '#666666',
      background: '#c3d7ee',
  },
  dark: {
    white: '#252525',
      black: '#eee',
      lightRed: '#4b2525',
      red: '#87403f',
      darkRed: '#c5676a',
      lightGrey: '#666666',
      grey: '#9f9f9f',
      darkGrey: '#ccc',
      background: '#3f4963',
  },
}

export const DarkThemeContext = createContext({ isDarkTheme: false, setIsDarkTheme: null})

function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <DarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </DarkThemeContext.Provider>
  )
}

export default MyApp
