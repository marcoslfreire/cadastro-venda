import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <select value={productName} onChange={(e) => setProductName(e.target.value)}>
        <option value="">Select Product</option>
        {products.map((product) => (
          <option key={product.id} value={product.name}>
            {product.name}
          </option>
        ))}
      </select>
      <input type="number" placeholder="Quantity" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
      <button type="submit">Sell Product</button>
    </form>
  );
}

export default SaleForm;
