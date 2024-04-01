// src/pages/ProductsPage.js
import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import '../styles/page.css'; // Importando estilos CSS para a página

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    // Adicionar lógica para adicionar o produto (falta implementar)
    console.log('Adicionando produto:', product);
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (productId) => {
    // Adicionar lógica para excluir o produto (falta implementar)
    console.log('Excluindo produto com ID:', productId);
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div className="page-container"> {/* Classe CSS para o container da página */}
      <h1>Cadastre seu produto</h1>
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
}

export default ProductsPage;
