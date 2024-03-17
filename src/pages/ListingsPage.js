import React, { useState } from 'react';
import ListingCard from '../components/ListingCard';
import SearchBar from '../components/SearchBar';

const mockListings = [
  {
    id: 1,
    address: '123 Main St, Anytown, CA',
    price: '$1,500,000',
    imageUrl: 'https://example.com/image1.jpg',
    beds: 3,
    baths: 2,
    sqft: 1800,
  },
  {
    id: 2,
    address: '456 Elm St, Anytown, CA',
    price: '$800,000',
    imageUrl: 'https://example.com/image2.jpg',
    beds: 2,
    baths: 1.5,
    sqft: 1200,
  },
  // ... add more listings
];

const ListingsPage = () => {
  const [listings] = useState(mockListings);
  const [filteredResults, setFilteredResults] = useState(mockListings);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (searchCriteria) => {
    setIsLoading(true);
    setError('');

    try {
      const filtered = listings.filter(listing => 
        listing.address.toLowerCase().includes(searchCriteria.address.toLowerCase()) &&
        listing.price.toLowerCase().includes(searchCriteria.price.toLowerCase()) &&
        listing.beds >= searchCriteria.beds &&
        listing.baths >= searchCriteria.baths &&
        listing.sqft >= searchCriteria.sqft
      );

      setFilteredResults(filtered);
    } catch (err) {
      setError('An error occurred while filtering listings.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="listings-page">
      <h1>Affordable Housing Listings</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <p>{error}</p>}
      {isLoading ? <p>Loading...</p> : (
        filteredResults.length > 0 ? (
          filteredResults.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))
        ) : (
          <p>No listings found matching your criteria.</p>
        )
      )}
    </div>
  );
};

export default ListingsPage;
