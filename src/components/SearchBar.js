import React, { useState } from "react";

//HANDLES SEARCH FUNCTIONALITY ________________________________________________________________________________________
function SearchBar({ onSearch }) {
  //STATES_____________________________________________________________________________________________________________
  const [city, setCity] = useState("");

  //EVENTS_____________________________________________________________________________________________________________

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  //DISPLAY ___________________________________________________________________________________________________________

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
