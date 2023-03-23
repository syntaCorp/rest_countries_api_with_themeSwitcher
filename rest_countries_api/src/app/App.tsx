import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchBar from "../components/Views/Home/Search/SearchBar";
import Header from "../components/Views/Home/Header/Header";
import Home from '../components/Views/Home/Home';
import Country from '../components/Views/Country/Country';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/' element={<Country />} />  
     </Routes>
    </div>
  );
}

export default App;
