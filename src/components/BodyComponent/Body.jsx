import { useState } from "react";
import resData from "../../../mockData";
import RestaurantCard from "../resCardComponent/RestaurantCard";

const Body = () => {
  // console.log(resData);

  // let listOfRestaurant = [
  //   {
  //     info: {
  //       id: "16865",
  //       name: "Pizza Hut 1",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 3.1,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "16866",
  //       name: "Pizza Hut 2",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.2,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "16867",
  //       name: "Pizza Hut 3",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.1,
  //     },
  //   },
  // ];

  //useState Hooked.

  const [listOfRestaurant, setListOfRestaurant] = useState(resData);

  const handleFilter = () => {
    console.log("Filter button clicked");

    const filterList = listOfRestaurant.filter((res) => {
      return  res.info.avgRating > 4.4;
    });
    console.log(filterList);
    setListOfRestaurant(filterList);
  };

  return ( 
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard resList={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
