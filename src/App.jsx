import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
