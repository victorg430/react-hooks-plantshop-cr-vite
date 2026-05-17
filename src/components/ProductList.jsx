import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, addToCart, cart }) {
  // Fix: Check if array is empty and return the message expected by the test
  if (products.length === 0) {
    return <p className="no-products">No products available</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          cart={cart}
        />
      ))}
    </div>
  );
}
