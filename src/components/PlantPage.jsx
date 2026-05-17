import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // 1. State for holding the master list of plants from the backend
  const [plants, setPlants] = useState([]);
  
  // 2. State for holding the current search query string
  const [searchQuery, setSearchQuery] = useState("");

  // 3. Fetch plants from the backend on initial page load
  useEffect(() => {
    fetch("http://localhost:6001/plants") // Ensure this matches your server port (usually 6001 or 3000)
      .then((response) => response.then ? response : response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // 4. Handler to add a newly created plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // 5. Filter the plants list dynamically based on search input
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
