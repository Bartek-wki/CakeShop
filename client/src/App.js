import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/views/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';
import Cakes from './components/features/Cakes/Cakes';
import Pastries from './components/features/Pastries/Pastries';
import About from './components/pages/About/About';
import SingleProduct from './components/features/SingleProduct/SingleProduct';
import Cart from './components/features/Cart/Cart';
import Order from './components/features/Order/Order';
import OrderResponse from './components/features/OrderResponse/OrderResponse';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cakes' element={<Cakes />} />
        <Route path='/:product/:id' element={<SingleProduct />} />
        <Route path='/pastries' element={<Pastries />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/order/response' element={<OrderResponse />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
