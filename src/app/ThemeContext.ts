import { createContext, useContext } from 'react';

export type themeType = 'dark' | 'light';

export type ThemeContextType = {
  currentTheme: themeType,
  switchTheme: (arg: themeType) => void
};

export const ThemeContext = createContext<ThemeContextType>(
  {
    currentTheme: 'light',
    switchTheme: (arg: themeType) => { }
  }
)

//custom hook to access theme
//invoke in other components to retrieve theme properties

export const useTheme = () => useContext(ThemeContext);
