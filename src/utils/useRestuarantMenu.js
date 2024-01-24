import { useEffect, useState } from "react";

const useRestuarantMenu = (id) => {
  //shud be dynamic as per id.
  const [restaurant, setRestaurant] = useState(null);

  //API call
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.8523973&lng=74.5814773&restaurantId=" +
        id
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  //return Resto List
  return restaurant;
};

export default useRestuarantMenu;
