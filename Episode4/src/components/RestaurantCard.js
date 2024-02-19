import {CDN_URL} from "../../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
      resData?.card?.card?.info;
    const { deliveryTime } = resData?.card?.card?.info?.sla;
    return (
      <div className="restaurantcard" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="restaurant-logo"
          alt="restaurant-logo"
          src={CDN_URL+cloudinaryImageId}         
        />
        <h3>{name.toUpperCase()}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };
  export default RestaurantCard;