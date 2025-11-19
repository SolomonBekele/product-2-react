import React, { useEffect, useState } from 'react'
import {IMG_CDN_URL, MENU_ITEM_TYPE_KEY } from '../utils/constants'
import { MenuShimmer } from './shimmer'
import { MdStarRate } from "react-icons/md";
import { useParams } from 'react-router-dom'
import ItemCard from './ItemCard';
import useResMenuData from '../hooks/useResMenuData';

const RestaurantMenu = () => {
  const {resId}= useParams();
  const [resInfo,menuItems] =useResMenuData(resId)
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = resInfo || {};
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

        <div className="items mt-3 space-y-3 grid lg:grid-cols-3 md:grid-cols-2  2xl:grid-cols-4">
          {menuItems.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
     
    </div>
      </div>
      
      
  )
}

export default RestaurantMenu
