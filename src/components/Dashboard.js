import React from 'react';

function Dashboard({ products, totalRevenue }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Products: {products.length}</p>
      <p>Total Revenue: ${totalRevenue}</p>
    </div>
  );
}

export default Dashboard;
