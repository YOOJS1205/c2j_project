import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductRegist from "./pages/ProductRegist";
import MyProductList from "./pages/MyProductList";
import ProductDetail from "./pages/ProductDetail";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-regist" element={<ProductRegist />} />
        <Route path="/product-list" element={<MyProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
