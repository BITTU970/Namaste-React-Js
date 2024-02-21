import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterListofRestaurant, setFilterListofRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.5355161&lng=77.3910265&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
    //const result = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(result)
    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("GET12 REST", listofRestaurants);
  useEffect(() => {
    console.log("useEffect called");
    console.log(listofRestaurants);
    fetchData();
    console.log(listofRestaurants);
  }, []);

  console.log("GET15 REST", listofRestaurants);
  //  const aa = listofRestaurants.map((item) => {
  //   let arr =[]
  //   let resultcard = item?.info?.avgRating?.name?.avgRating?.costForTwo;
  //   const ad = arr.push(resultcard);
  //   console.log(ad[0]);
  //   return ad

  // });
  // console.log(aa);

  // if(listofRestaurants.length === 0){
  //   return <Shimmer/>
  // }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterListofRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("clicked");
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating === 4
            );
            console.log("button clicked me");
            setListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listofRestaurants >= 0
          ? "NO CARD AVAILABLE"
          : filterListofRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
      </div>
    </div>
  );
};
export default Body;
