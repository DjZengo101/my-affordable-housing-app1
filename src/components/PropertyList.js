import React from 'react';
import ListingCard from './ListingCard';
import './PropertyList.css';

const PropertyList = ({ listings, isLoading, error }) => {
  if (error) {
    return <div className="error-message">Error loading listings: {error}</div>;
  }

  if (isLoading) {
    return <div className="loading-message">Loading listings...</div>;
  }

  return (
    <div className="property-list">
      {listings.length > 0 ? (
        listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))
      ) : (
        <div className="empty-message">No listings available.</div>
      )}
    </div>
  );
};

export default PropertyList;
