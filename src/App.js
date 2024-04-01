import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import SalesPage from './pages/SalesPage';
import DashboardPage from './pages/DashboardPage';

// Exemplo de dados de produtos
const productsData = [
  { id: 1, name: 'Product 1', value: 10, quantity: 5 },
  { id: 2, name: 'Product 2', value: 20, quantity: 10 },
  // Mais produtos...
];

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/dashboard" element={<DashboardPage products={productsData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
