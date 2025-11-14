import RestaurantCard from "./RestaurantCard";
import { foodData } from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL, SWIGGY_REST_API_PATH } from "../utils/constants";
import Shimmer from "./shimmer";
import react from "react";


const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(SWIGGY_API_URL);
    const data = await res.json();

    const restuarants = eval("data?." + SWIGGY_REST_API_PATH) || [];

    // restuarants.array.forEach(element => console.log(element))
    setRestaurantData(restuarants);
  };

  return  (
    <div className="body">
      <div className=" flex justify-around m-2 text-sm">
        <div className="search ">
          <input
            type="text"
            className="border-y border-s"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
           
              const restaurantData4 = restaurantData.filter((data) =>
                data.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestaurantData(restaurantData4);
             
          }
          }
          />
          <button
            className="bg-black text-white border border-black rounded-r-lg px-2"
            onClick={() => {
             
              const restaurantData3 = restaurantData.filter((data) =>
                data.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestaurantData(restaurantData3);
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
              setRestaurantData(restuarantData2);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      {restaurantData?.length===0 ? <Shimmer/> :
      <div className="restuarant-container flex justify-center  flex-wrap container mx-auto gap-4">
        {restaurantData.map((restuarant, index) => (
          <RestaurantCard key={restuarant?.info?.id} {...restuarant?.info} />
        ))}
      </div>
       }
    </div>
  );
};
export default Body;
