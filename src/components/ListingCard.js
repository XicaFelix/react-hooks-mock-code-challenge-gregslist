import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {

  const { description, image, location} = listing;
  const [favorite, setFavorite]= useState(false);

  function handleFavoriteItem(){
    setFavorite(!favorite);
  }

  console.log('On Delete:', onDeleteListing)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavoriteItem} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteItem} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button  className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
