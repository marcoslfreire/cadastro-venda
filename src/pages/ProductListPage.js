// src/pages/ProductListPage.js
import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/page.css'; // Importando estilos CSS para a página

function ProductListPage({ products, onDelete }) {
  return (
    <div className="page-container"> {/* Classe CSS para o container da página */}
      <h1>Lista de produtos</h1>
      <ProductList products={products} onDelete={onDelete} />
    </div>
  );
}

export default ProductListPage;
