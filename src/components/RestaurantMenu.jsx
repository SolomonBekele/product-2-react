import React, { useEffect, useState } from 'react'
import { MENU_API_URL, PROXY, RESTAURANT_MENU, SWIGGY_MENU_API_URL,IMG_CDN_URL, RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY, LOCAL_MENU_API } from '../utils/constants'
import { MenuShimmer } from './shimmer'
import { MdStarRate } from "react-icons/md";
import { useParams } from 'react-router-dom'
import ItemCard from './ItemCard';

const RestaurantMenu = () => {
  const {resId}= useParams();
  const [resInfo,setResInfo] = useState(null)
  const [menuItems, setMenuItems] = useState([]);
  const [open, setOpen] = useState(false);
  
  
  useEffect(()=>{
    fetchRestaurantMenu()
  },[])
  const fetchRestaurantMenu = async ()=>{
try {
  console.log("object");
     const res = await fetch(LOCAL_MENU_API + resId );
      console.log(res);
       const json = await res.json();
      console.log(json)
      const restaurantData = json?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
      setResInfo(restaurantData);

      setResInfo(json.data);

      // Set menu item data
      const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
      
      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      })
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {};
  return resInfo===null ? <MenuShimmer/> :
  (
    <div className="menu">
      <div className="restaurant-header flex  justify-center gap-20 items-center">
        <img className='h-80 w-80 rounded-full' src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        <div className="restaurant-header-details ">
          <h1>{name}</h1>
          <h3>{locality}</h3>
          <p>{cuisines?.join(", ")}</p>
          <h4 className="rating-time">
            <div className="rating">
              <MdStarRate
                className="rating-logo"
                style={{
                  backgroundColor:
                    avgRatingString >= 4.0 ? "var(--green)" : "var(--red)",
                }}
              />
              <span>
                {avgRatingString || 3.8} ({totalRatingsString || "1K+ ratings"})
              </span>
            </div>
            {/* <span>|</span> */}
            <span className="time">{sla?.slaString}</span>
          </h4>
        </div>
      </div>
      <div className="w-full">
      {/* Dropdown button */}
      <div
        
        className="px-4 py-2  rounded-md  w-full flex"
      >
       <p className='m-auto'>{`Recommended(${menuItems.length})`}</p> 

      </div>

      {/* Items container */}

        <div className="items mt-3 space-y-3 flex flex-col gap-3">
          {menuItems.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
     
    </div>
      </div>
      
      
  )
}

export default RestaurantMenu