import {createContext, useContext} from 'react';

// export type themeType = 'dark' | 'light';

export type ThemeContextType = {
    currentTheme: string,
    switchTheme: (arg: string) => void
  };

  export const ThemeContext = createContext<ThemeContextType>({
    currentTheme: 'light',
    switchTheme: (arg: string) => {}
  })



  export const useTheme = () => useContext(ThemeContext);


