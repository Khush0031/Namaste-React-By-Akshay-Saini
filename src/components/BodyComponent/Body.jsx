import resData from "../../../mockData";
import RestaurantCard from "../resCardComponent/RestaurantCard";

const Body = () => {
  // console.log(resData);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard resList={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
