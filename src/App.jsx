import React from "react";
import HeaderComponent from "./Components/Header/index.jsX";
import FooterComponent from "./Components/Footer/index.jsx";
import Product from "./Components/Content/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Apidata from "./Apidata";
const App = () => (
  <div className="App">
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path = "/:category" element = {<Product/>} />
      </Routes>
      <FooterComponent />
    </Router>
  </div>
);
export default App;



