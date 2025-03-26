import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-2">
          <h1 className="display-5 fw-bold">{greeting}</h1>
          <p className="col-md-8 fs-4">
            Descubre nuestros productos de alta calidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;