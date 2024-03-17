// src/components/PropertyList.js
import React from 'react';
import ListingCard from './ListingCard'; // Reuse the ListingCard component

const PropertyList = ({ listings }) => {
  return (
    <div className="property-list">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default PropertyList;
