import React from 'react';
import './ListingCard.css'; // Make sure the CSS file is in the same directory

const ListingCard = ({ listing }) => {
  const { id, title = 'Listing Title', price, address, beds, baths, sqft } = listing; // Set a default title
  const details = [beds && `${beds} Beds`, baths && `${baths} Baths`, sqft && `${sqft} sqft`];

  return (
    <div className="listing-card">
      {/* Removed image preloading as no images are available */}
      {/* {imageUrl && <link rel="preload" as="image" href={imageUrl} />} */}

      {/* Display placeholder image if no imageUrl is provided */}
      <img src="placeholder.jpg" alt={`Listing ${id}`} className="listing-image" />

      <div className="listing-info">
        <h3 className="listing-title">{title}</h3>
        <p className="listing-price">{price}</p>
        {address && <p className="listing-address">{address}</p>} {/* Display address only if it exists */}
        <ul className="listing-details">
          {details.filter(Boolean).map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingCard;
