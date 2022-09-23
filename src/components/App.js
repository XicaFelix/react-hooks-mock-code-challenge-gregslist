import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:6001/listings').then(resp=>resp.json()).then((result)=>{
      setListings(result);
      setFilteredListings(result);
    })
   },[])

  function handleFilterListing(searchTerm){
    if (searchTerm === '') {
      setFilteredListings(listings);
    } else {
      setFilteredListings(listings.filter((item)=> item.description.toLowerCase().includes(searchTerm.toLowerCase())))
    }
  }
  
  function handleDeleteListing(listing){
    setListings(listings.filter(l => {
      return l.id !== listing.id
    }))

    setFilteredListings(filteredListings.filter(l => {
      return l.id !== listing.id
    }))

    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
  }
  return (
    <div className="app">
      <Header onFilterListing = {handleFilterListing}/>
      <ListingsContainer listings={filteredListings} handleDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
