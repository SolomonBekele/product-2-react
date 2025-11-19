import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const ItemCard = ({ imageId, name,price,description}) => {
  return (
    <div className=" mx-5  p-2 text-sm  h-60">
      <div className="flex justify-between my-2">
        <div className="flex flex-col gap-2">
          <h1>{name}</h1>
          <p className="item-desc">{description}</p>
            <p className="item-cost">
                {price > 0
          ? new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(price / 100)
          : " "}
      </p>
      
        </div> 
      <img className="w-[7rem] h-20  rounded" src={IMG_CDN_URL + imageId}></img>
    </div>
    <hr />
    </div>
  );
};

export default ItemCard;
