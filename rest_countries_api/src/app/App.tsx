import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "../components/Home/Header/Header";
import Home from '../components/Home/Home';
import CountryPoster from '../components/Country/CountryPoster';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:name' element={<CountryPoster />} />
      </Routes>
    </div>
  );
}

export default App;
