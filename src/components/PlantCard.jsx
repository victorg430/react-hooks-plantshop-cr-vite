import React, { useState } from "react";

function PlantCard({ plant }) {
  // Destructure plant properties
  const { name, image, price } = plant;
  
  // Track out-of-stock status locally
  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((prevStatus) => !prevStatus);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image || "https://via.placeholder.com/150"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
