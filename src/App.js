import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './Component/Navbar/Navbar.js';
import MovieComponent from './Component/MovieComponent/Movie.js';
import WhipLaseComponent from './Component/MovieComponent/WhipLash.js';
import MadmaxComponent from './Component/MovieComponent/MadMax.js';
import ReventComponent from './Component/MovieComponent/ReVentAnt.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
          <Navbar />
        </>} />
        <Route path='/brie-larson' element={
          <>
            <MovieComponent />
          </>}
        />
        <Route path='/WHISLAPE' element={<>
          <WhipLaseComponent />
        </>} />
        <Route path='/MadMax' element={<>
          <MadmaxComponent />
        </>}
        />
        <Route path='/The REVENANT' element={
          <>
            <ReventComponent />
          </>
        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
