import React, { useState, useEffect, lazy, Suspense } from 'react';
import './HomePage.css';

// Lazy load components
const MapView = lazy(() => import('../components/MapView'));
const SearchBar = lazy(() => import('../components/SearchBar'));
const PropertyList = lazy(() => import('../components/PropertyList'));

const HomePage = () => {
  const [searchParams, setSearchParams] = useState({});
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (Object.keys(searchParams).length > 0) {
      setIsLoading(true);
      // Fetch listings from API or service
      // Replace with actual API call
      fetchListings(searchParams)
        .then(data => setListings(data))
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    }
  }, [searchParams]);

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  if (error) {
    return <div>Error loading listings</div>;
  }

  return (
    <div className="homepage">
      <header className="homepage-header">
        {/* Directly reference the logo from the public folder */}
        <img src="/logo.jpeg" alt="Company Logo" className="company-logo" />
        <h1>CARTOWave Solutions</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar onSearch={handleSearch} />
        <div className="map-and-listings">
          {isLoading ? (
            <div>Loading listings...</div>
          ) : (
            <>
              <MapView searchParams={searchParams} listings={listings} />
              <PropertyList listings={listings} />
            </>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default HomePage;
