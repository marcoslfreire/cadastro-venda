// src/pages/DashboardPage.js
import React from 'react';
import Dashboard from '../components/Dashboard';

function DashboardPage({ products }) {
  // Calcular a receita total (falta implementar)
  const totalRevenue = products.reduce((total, product) => total + product.value * product.quantity, 0);

  return (
    <div>
      <h1>Página do Painel de Controle</h1>
      <Dashboard products={products} totalRevenue={totalRevenue} />
    </div>
  );
}

export default DashboardPage;
