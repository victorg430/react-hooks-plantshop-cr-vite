import React from 'react';

export default function ProductCard({ product, addToCart, cart }) {
  // Check if this specific item exists in the cart array
  const isInCart = cart.some(item => item.id === product.id);

  return (
    // Fix: Added data-testid so Jest can find the element
    <div className="product-card" data-testid={`product-${product.id}`}>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      {isInCart && <p>{product.name} is in your cart.</p>}
    </div>
  );
}

