import React, { useState } from 'react';

function ProductForm({ onSubmit }) {
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productName, productValue, productQuantity });
    setProductName('');
    setProductValue('');
    setProductQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <input type="number" placeholder="Product Value" value={productValue} onChange={(e) => setProductValue(e.target.value)} />
      <input type="number" placeholder="Product Quantity" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
