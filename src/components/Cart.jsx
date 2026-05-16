import React from 'react';

export default function Cart({ cart }) {
  return (
    <div className="cart-container">
      {/* Fix: Added the exact header wording expected by the test */}
      <h2>Shopping Cart</h2> 
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}