import { useEffect, useState } from "react";
import RestaurantCard from "../resCardComponent/RestaurantCard";
import { createRestaurantApiUrl } from "../../utils/constant";
import ShimmerHome from "../ShimmerComponent/HomeShimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    const fetLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude; // Fixed typo
            const lng = position.coords.longitude;
            setLocation({ lat, lng });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };
    fetLocation();
  }, []);

  useEffect(() => {
    if (location.lat && location.lng) {
      (async () => {
        const resApiUrl = createRestaurantApiUrl(location.lat, location.lng);
        console.log(`Fetching data from: ${resApiUrl}`); // Log the API URL
        try {
          const response = await fetch(resApiUrl);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const resData = await response.json();
          console.log(resData); // Log the response data
          const restaurants =
            resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (restaurants) {
            setListOfRestaurant(restaurants);
            setFilterRestaurant(restaurants);
          } else {
            console.error("Unexpected response structure:", resData);
          }
        } catch (error) {
          console.error("Error fetching restaurant data:", error);
        }
      })();
    }
  }, [location]);

  const handleFilter = () => {
    const filterList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4.4
    );
    setFilterRestaurant(filterList);
  };

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
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
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
          <Link
            to={`${"/restaurant/"}${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard resList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
