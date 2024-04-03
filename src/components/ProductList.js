import React from 'react';

function ProductList({ products, onDelete }) {
  return (
    <div>
      <h2>Lista de produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.value} - {product.quantity} units
            <button onClick={() => onDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
