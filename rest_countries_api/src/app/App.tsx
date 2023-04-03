import React, {useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "../components/Home/Header/Header";
import Home from '../components/Home/Home';
import CountryPoster from '../components/Country/CountryPoster';
import { ThemeContext, themeType } from './ThemeContext';



function App() {

  const switchTheme = (lightMode: string) => { setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')};
  
  const [currentTheme, setCurrentTheme] = useState<themeType>('light');

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
