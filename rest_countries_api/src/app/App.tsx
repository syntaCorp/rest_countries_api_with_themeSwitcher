import React, {useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "../components/Home/Header/Header";
import Home from '../components/Home/Home';
import CountryPoster from '../components/Country/CountryPoster';
import { ThemeContext } from './ThemeContext';



function App() {
  // Detect the default browser theme
const isbrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

//render specific mode when default theme is set
const getDefaultTheme = (): string => {
  const localStorageTheme = localStorage.getItem('theme')!;

  const browserDefault = isbrowserDefaultDark() ? 'dark' : 'light';
  return ( localStorageTheme && browserDefault);
};

  const switchTheme = (lightMode: string) => { 
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light'); // toggle theme 

    localStorage.setItem('theme', currentTheme === 'light' ? 'dark' : 'light'); //persist user's set theme
  };
  
  const [currentTheme, setCurrentTheme] = useState<string>(getDefaultTheme());



  return (
    <ThemeContext.Provider value={{currentTheme, switchTheme}}>
      <div className="App" id={currentTheme}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<CountryPoster />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
