import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
  });

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={searchParams.location}
        onChange={handleChange}
      />
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={searchParams.minPrice}
        onChange={handleChange}
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={searchParams.maxPrice}
        onChange={handleChange}
      />
      <input
        type="number"
        name="bedrooms"
        placeholder="Bedrooms"
        value={searchParams.bedrooms}
        onChange={handleChange}
      />
      <input
        type="number"
        name="bathrooms"
        placeholder="Bathrooms"
        value={searchParams.bathrooms}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
