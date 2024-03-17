import React, { useState } from 'react';
import ListingCard from '../components/ListingCard';

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
  const [listings, setListings] = useState(mockListings);

  return (
    <div className="listings-page">
      <h1>Affordable Housing Listings</h1>
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsPage;
