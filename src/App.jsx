import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/HomePage';
import Contact from './components/contact/Contact';
import Product from './components/products/HerbalPowders';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
