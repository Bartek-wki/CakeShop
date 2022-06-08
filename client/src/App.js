import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/views/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';
import Cakes from './components/pages/Cakes/Cakes';
import Pastries from './components/pages/Pastries/Pastries';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cakes' element={<Cakes />} />
        <Route path='/pastries' element={<Pastries />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
