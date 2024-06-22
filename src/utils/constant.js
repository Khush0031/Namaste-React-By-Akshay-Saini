//  Swiggy API :-

//0. ProxyServer API:-
export const Proxy_API_URL =
  "http://localhost:8080/api/restaurants?lat=28.6097528&lng=77.2024306&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// 1. Restaurant list API

export const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6097528&lng=77.2024306&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// 2. Image-assets API

export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// 3. Restaurant-Menu API.
export const MENU_API_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6097528&lng=77.2024306&restaurantId=16865&catalog_qa=undefined&submitAction=ENTER`;

export const createMenuApiUrl = (resId) =>
  `${"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6097528&lng=77.2024306&restaurantId="}${resId}${"&catalog_qa=undefined&submitAction=ENTER"}`;

export const createRestaurantApiUrl = (
  lat,
  lng,
  pageType = "DESKTOP_WEB_LISTING"
) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=${pageType}`;
