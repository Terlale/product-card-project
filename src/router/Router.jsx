import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from "../components/Basket";
import Home from "../components/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
