import { useEffect, useState } from "react";
import { MENU_API_URL } from "../../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
  const { resId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await fetch(MENU_API_URL);
      const menuData = await data.json();
      setResInfo(menuData);
    })();
  }, []);

  return (
    <div className="menu">
      <h1>{resInfo?.data?.cards[0]?.card?.card?.text}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
