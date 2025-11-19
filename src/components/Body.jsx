import RestaurantCard from "./RestaurantCard";
import { foodData } from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL, SWIGGY_REST_API_PATH } from "../utils/constants";
import Shimmer from "./shimmer";
import react from "react";
import { Link } from "react-router-dom";
import useResData from "../hooks/useResData";
import useOnlineStatus from "../hooks/useOnlineStatus";


const Body = () => {
  const [restaurantData,AllfilResData] = useResData();
  const [filteredRestaurantData, setFilteredRestaurantData] = useState(null);
  const [searchText, setSearchText] = useState("");

  const filterData = (searchText, restaurants) => {
    const resFilterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return resFilterData;
  }
  
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurantData(filteredData);
      if (filteredData?.length === 0) {
        // setErrorMessage(
        //   `Sorry, we couldn't find any results for "${searchText}"`
        // );
      }
    } else {
      setFilteredRestaurantData(restaurants);
    }
  };

  return restaurantData?.length===0 && AllfilResData?.length === 0 ? (<Shimmer/>) : (
    
    <div className="body">
      <div className=" flex justify-around m-2 text-sm">
        <div className="search ">
          <input
            type="text"
            className="border-y border-s px-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);      
              searchData(e.target.value, restaurantData);
          }
          }
          />
          <button
            className="bg-black text-white border border-black rounded-r-lg px-2"
            onClick={() => {
              searchData(searchText, restaurantData);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-rated-restaurant ">
          <button
            className="px-2 border rounded bg-black text-white"
            onClick={() => {
              const restuarantData2 = restaurantData.filter(
                (rest) => rest.info?.avgRating > 4.5
              );
              setFilteredRestaurantData(restuarantData2);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="restuarant-container flex justify-center  flex-wrap container mx-auto gap-4">
        {(filteredRestaurantData === null ? AllfilResData : filteredRestaurantData).map((restaurant) => (
          <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
          <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
