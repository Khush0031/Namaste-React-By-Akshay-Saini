import { useEffect, useState } from "react";
import RestaurantCard from "../resCardComponent/RestaurantCard";
import { API_URL, Proxy_API_URL } from "../../utils/constant";
import ShimmerHome from "../ShimmerComponent/HomeShimmer";

const Body = () => {
  //useState Hook.

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  //useEffect Hook.
  const fetchData = async () => {
    // console.log("useEffect Called");
    const Data = await fetch(API_URL);
    const resData = await Data.json();
    setListOfRestaurant(
      resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(resData);
  };

  useEffect(() => {
    // fetchData();
    (async () => {
      const Data = await fetch(API_URL);
      const resData = await Data.json();
      setListOfRestaurant(
        resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRestaurant(
        resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    })();
  }, []);

  const handleFilter = () => {
    console.log("Filter button clicked");

    const filterList = listOfRestaurant.filter((res) => {
      return res.info.avgRating > 4.4;
    });
    console.log(filterList);
    setListOfRestaurant(filterList);
  };

  // Conditional Rendering

  // if(listOfRestaurant.length === 0) {
  //   // return <h1>Loading...</h1>;
  //   return <ShimmerHome/>;
  // }

  // Conditional Rendering using ternary operator

  return listOfRestaurant.length === 0 ? (
    <ShimmerHome />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchTxt}
            className="search-box"
            id="search"
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log("Search button clicked", searchTxt);

              const filteredList = listOfRestaurant.filter((res) => {
                res.info.name.toLowerCase().includes(searchTxt.toLowerCase());
              });
              setFilterRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard resList={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
