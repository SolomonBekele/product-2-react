import { IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  areaName,
  sla,
  cuisines,
  costForTwo,
  avgRating,
}) => {
  return (
     <div
      className="restaurant-card w-[180px] h-[270px] bg-slate-100 px-1 text-sm 
                    hover:border border-black hover:cursor-pointer"
    >
      <img
        className="my-1 mx-auto w-[160px] h-[120px] object-cover"
        src={
          cloudinaryImageId?.startsWith("http")
            ? cloudinaryImageId
            : `${IMG_CDN_URL}${cloudinaryImageId}`
        }
        alt={name}
      />
      <h3 className="p-1 font-semibold">{name}</h3>
      <h4 className="p-1 text-xs text-gray-600">{cuisines?.join(", ")}</h4>
      <h4 className="p-1 text-xs">{avgRating} ⭐</h4>
      <h4 className="p-1 text-xs">{sla?.deliveryTime} mins</h4>
      <h4 className="p-1 text-xs">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
