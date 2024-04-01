// src/components/SaleForm.js
import React, { useState } from 'react';
import '../styles/form.css'; // Importando estilos CSS para o formulário

function SaleForm({ products, onSubmit }) {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedProduct = products.find((product) => product.name === productName);
    if (selectedProduct) {
      onSubmit({ productId: selectedProduct.id, quantity: productQuantity });
      setProductName('');
      setProductQuantity('');
    } else {
      alert('Product not found!');
    }
  };

  return (
    <form className="sale-form" onSubmit={handleSubmit}> {/* Classe CSS para o formulário */}
      {/* ... */}
    </form>
  );
}

export default SaleForm;
