import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './views/Calculator';
import Home from './views/Home';
import ProductInfo from './views/ProductInfo';
import ProductsList from './views/ProductsList';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="products/:productId/info" element={<ProductInfo />} />
      <Route path="products" element={<ProductsList />} />
    </Routes>
  );
}

export default Router;
