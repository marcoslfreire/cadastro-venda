// src/components/ProductForm.js
import React, { useState } from 'react';

function ProductForm({ onSubmit }) {
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productDetalhe, setProductDetalhe] = useState('');

  const isFormValid = () => {
    return productName.trim() !== '' && productValue.trim() !== '' && productQuantity.trim() !== '' && productDetalhe.trim() !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: productName, value: productValue, quantity: productQuantity, detalhe: productDetalhe });
    setProductName('');
    setProductValue('');
    setProductQuantity('');
    setProductDetalhe('');
  };

  const handleAddButtonClick = (e) => {
    if (isFormValid()) {
      // Chamando a função handleSubmit passando o evento associado
      handleSubmit(e);
    } else {
      alert('Todos os campos são obrigatórios!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="nome do produto" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <input type="number" placeholder="preço do produto " value={productValue} onChange={(e) => setProductValue(e.target.value)} />
      <input type="number" placeholder="quantidade de produtos" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
      <input type="text" placeholder="detalhe do produto" value={productDetalhe} onChange={(e) => setProductDetalhe(e.target.value)} />
      {/* Alterando o tipo do botão para "submit" */}
      <button type="button" onClick={handleAddButtonClick}>Adicionar</button>
      {/* Mantendo o botão como type="button" para evitar o envio do formulário */}
    </form>
  );
}

export default ProductForm;
