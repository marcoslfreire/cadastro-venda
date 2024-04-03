// src/pages/ProductsPage.js
import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import '../styles/page.css'; // Importando estilos CSS para a página

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    // Adiciona o novo produto à lista de produtos
    const updatedProducts = [...products, { ...product, id: Date.now() }];
    // Atualiza a lista de produtos no estado
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (productId) => {
    // Remove o produto da lista de produtos com base no ID
    const updatedProducts = products.filter((product) => product.id !== productId);
    // Atualiza a lista de produtos no estado
    setProducts(updatedProducts);
  };

  return (
    <div className="page-container"> {/* Classe CSS para o container da página */}
      <h1>Cadastre seu produto</h1>
      {/* Renderiza o formulário para adicionar produtos */}
      <ProductForm onSubmit={handleAddProduct} />
      {/* Renderiza a lista de produtos, passando a lista atualizada como propriedade */}
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
}

export default ProductsPage;
