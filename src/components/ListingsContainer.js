import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDeleteListing}) {
  console.log('Type of Handle delete:', typeof handleDeleteListing)
  const listingsComponents = listings.map(listing => {
    return <ListingCard key={listing.id} listing={listing} props={handleDeleteListing}/>
  })

  return (
    <main>
      <ul className="cards">
        {listingsComponents}
      </ul>
    </main>
  );
}

export default ListingsContainer;