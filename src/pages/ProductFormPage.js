// src/pages/ProductFormPage.js
import React from 'react';
import ProductForm from '../components/ProductForm';
import '../styles/page.css'; // Importando estilos CSS para a página

function ProductFormPage({ onSubmit }) {
  const handleAddProduct = (product) => {
    // Adicionar lógica para adicionar o produto (falta implementar)
    console.log('Adicionando produto:', product);
    onSubmit(product);
    // Exibir um alerta de sucesso ao cadastrar o produto
    alert('Produto cadastrado com sucesso!');
  };

  return (
    <div className="page-container"> {/* Classe CSS para o container da página */}
      <h1>Cadastre seu produto</h1>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
}

export default ProductFormPage;
