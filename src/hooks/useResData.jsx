import React, { useEffect, useState } from 'react'
import { SWIGGY_API_URL, SWIGGY_REST_API_PATH } from '../utils/constants';

const useResData = () => {
  const [restaurantData,setRestaurantData] = useState("")
  const [filterResdata,setFilteredResData] = useState("")
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_API_URL);
    if(!response.ok){
      const err = response.status;
      throw new Error(err)
    }
    const data = await response.json();

    const restuarants = eval("data?." + SWIGGY_REST_API_PATH) || [];

    // restuarants.array.forEach(element => console.log(element))
    setRestaurantData(restuarants);
    setFilteredResData(restuarants)
   
  };
  return [restaurantData,filterResdata];
}

export default useResData;