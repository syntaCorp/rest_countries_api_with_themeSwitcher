import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "../components/Views/Home/Header/Header";
import Home from '../components/Views/Home/Home';
import CountryPoster from '../components/Views/Country/CountryPoster';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:name' element={<CountryPoster />} />
      </Routes>
    </div>
  );
}

export default App;
