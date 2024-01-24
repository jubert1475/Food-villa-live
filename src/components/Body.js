//{...restaurantList[0].info} this will destructure while passing it as props itself, so we can use directly object id directly.

// no key (Not acceptable) <<< index key (last option) << unique key (best practise)
import CardItem from "./CardItem";
//import { restaurantList } from "./Config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestuarantListData, setFilteredRestaurantListData] = useState([]);
  const [allRestuarantListData, setAllRestaurantListData] = useState([]);

  useEffect(() => {
    getRestaurants();  //call API
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8222363&lng=74.6508894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setAllRestaurantListData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantListData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(allRestuarantListData);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Opps...! offline</h1>;
  }

  //COnditonal Rendering:
  //IF restaurant is empty==>shimmer Ui
  //If restaurant has data==> actual data UI

  //# If allRestuarantListData is not there we will get rendering error to fix it we shud use below syntax.
  //it is called Early return or

  if (!allRestuarantListData) return null;

  return allRestuarantListData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchContainer" >
        <input
          type="searchBox"
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            //Filter the list
            const data = filterData(allRestuarantListData, searchText);

            //update the state
            setFilteredRestaurantListData(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurantList">
        {filteredRestuarantListData.length == 0 ? (
          <h1>No restaurant matches...</h1>
        ) : (
          filteredRestuarantListData.map((restuarant) => {
            return (
              <Link to={"restaurant/" + restuarant?.info?.id}>
                <CardItem {...restuarant.info} key={restuarant?.info?.id} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
