import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import './ResturantCard.css'
import UserContext from "../utils/UserContext";


const ResturantCard = ({ resData }) => {
  const {
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla,
    locality,
    areaName,
  } = resData?.info || {};

  const {loggedInUser} = useContext(UserContext)

  const deliveryTime = sla?.deliveryTime;

  return (
    <article className="res_card">
      {/* Image Section */}
      <div className="res_image_wrapper">
        <img
          className="res_image"
          src={CDN_URL + cloudinaryImageId}
          alt={`${name || "Restaurant"} food`}
          loading="lazy"
          decoding="async"
        />

        <div className="res_image_overlay"></div>

        {/* Rating */}
        {avgRating && (
          <div className="rating_badge">
            <span className="rating_star">★</span>
            <span>{avgRating}</span>
          </div>
        )}

        {/* Delivery */}
        {deliveryTime && (
          <div className="delivery_badge">
            <span className="delivery_icon">⚡</span>
            {deliveryTime} min
          </div>
        )}

        {/* Favorite Button */}
        <button
          className="favorite_btn"
          type="button"
          aria-label={`Add ${name} to favorites`}
        >
          ♡
        </button>
      </div>

      {/* Content */}
      <div className="res_card_content">
        <div className="res_title_row">
          <h3 className="res_name">{name}</h3>

          <span className="res_arrow">
            →
          </span>
        </div>

        <p className="res_cuisines">
          {cuisines.slice(0, 3).join(" • ")}
        </p>

        <div className="res_meta">
          {costForTwo && (
            <span className="res_price">
              {costForTwo}
            </span>
          )}

          {deliveryTime && (
            <span className="res_delivery">
              <span>🛵</span>
              {deliveryTime} min
            </span>
          )}
        </div>

        {(locality || areaName) && (
          <p className="res_location">
            <span>📍</span>
            {areaName || locality}
            {loggedInUser}
          </p>
        )}
      </div>

      {/* Bottom hover indicator */}
      <div className="card_hover_line"></div>
    </article>
  );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardVeg
export const withVegLabelCard = (ResturantCard) => {
  return (props) => {
    const isVeg = props.resData?.info?.veg === true;

    return (
      <div className="relative">
        {
          isVeg && (
            <label className="absolute top-3 left-3 z-10 rounded-md bg-green-600 px-3 py-1 text-sm font-bold text-white shadow-md">veg</label>
          )
        }
        <ResturantCard {...props}/>
      </div>
    )
  }
}

export default ResturantCard;