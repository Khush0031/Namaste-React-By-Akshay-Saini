// giving style ,it can dne by giving in object
//inline css, using js object
const styles = {
  backgroundColor: "#f1f2f8",
};

import {IMG_CDN_URL} from "../../utils/constant";

const RestaurantCard = (props) => {
  const { resList } = props;
  const {cloudinaryImageId, name, cuisines} = resList?.info
  // console.log(resList);
  return (
    <div className="res-card" style={styles}>
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="food-img"
        className="img"
      />
      <h2>{name}</h2>
      <p>{cuisines.join(',')}</p>
    </div>
  );
};

export default RestaurantCard;
