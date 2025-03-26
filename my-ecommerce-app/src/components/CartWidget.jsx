import React from 'react';

const CartWidget = () => {
  const cantidad = 3; // Número hardcodeado
  return (
    <div className="d-flex align-items-center">
      <i
        className="fas fa-shopping-cart"
        style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}
      ></i>
      <span className="badge bg-danger">{cantidad}</span>
    </div>
  );
};

export default CartWidget;