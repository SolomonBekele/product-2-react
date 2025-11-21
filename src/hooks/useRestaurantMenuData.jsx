import { useEffect, useState } from "react";
import { LOCAL_MENU_API } from "../utils/constants";

const useRestaurantMenuData = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const fetchResMenusData = async () => {
    try {
      const response = await fetch(LOCAL_MENU_API + resId);
      const json = await response.json();

      setRestaurantInfo(json?.data);
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchResMenusData();
  }, []);

  return restaurantInfo;
};

export default useRestaurantMenuData;