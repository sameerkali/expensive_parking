import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "./Pages/CheckoutPage";
import Home from "./Pages/Home";
import ParkingGrid from "./Pages/ParkingGrid";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/parking" element=<ParkingGrid /> />
        <Route path="/checkout" element=<CheckoutPage /> />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
