import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";
import Authentication from "./Components/Authentication";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cart" element={<CartPage />}/>
       <Route path="/cart/checkout" element={<CheckoutPage />}/>
       <Route path="/login" element={<Authentication />}/>
       
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
