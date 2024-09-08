import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import Typography from './components/Typography'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart';
import HeroBanner from './components/HeroBanner'
import Footer from './components/Footer';




function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />

        <div className="container mx-auto p-4 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<HeroBanner />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
