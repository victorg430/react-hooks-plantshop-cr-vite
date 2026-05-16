import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const INITIAL_PRODUCTS = [
  { id: 1, name: 'Milk', category: 'Dairy' },
  { id: 2, name: 'Bread', category: 'Bakery' },
  { id: 3, name: 'Eggs', category: 'Dairy' },
  { id: 4, name: 'Bananas', category: 'Produce' },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState([]);

  // Filter items based on dropdown selection
  const filteredProducts = INITIAL_PRODUCTS.filter(product => 
    category === 'All' ? true : product.category === category
  );

  const addToCart = (product) => {
    // Add product to cart if it isn't already there
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      {/* Task 1: Dark Mode */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Task 3: Category Filter Dropdown */}
      <section className="filter-section">
        <label htmlFor="category-select">Filter by Category: </label>
        <select 
          id="category-select" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Produce">Produce</option>
        </select>
      </section>

      {/* Task 2 & 3: Product List Rendering */}
      <ProductList products={filteredProducts} addToCart={addToCart} cart={cart} />

      {/* Optional or explicit Cart status viewer if expected by tests */}
      <Cart cart={cart} />
    </div>
  );
}