import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import Pages from '../pages/Pages';
import Accessories from '../pages/Accessories';
import Elements from '../pages/Elements';
import Buynow from '../pages/Buynow';
import ProductDetailPage from '../pages/CartDetails';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/elements" element={<Elements />} />
      <Route path="/buynow" element={<Buynow />} />
      <Route path="/productdetailpage/:id" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default Router;
