import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import {useState} from "react";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState(resList);

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick = {() => {
            
            console.log("clicked");
            const filteredList = listofRestaurants.filter((res) => 
               res.card.card.info.avgRating == 4.1
                          
            );
            console.log("button clicked me");
            setListofRestaurants(filteredList);
          }}
          
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
      {listofRestaurants >=0 ? "NO CARD AVAILABLE":
      
      listofRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          );
        })}
      
      
        
      </div>
    </div>
  );
};
export default Body;
