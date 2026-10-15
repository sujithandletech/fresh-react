import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Search_logo } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchtext, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(false);

      const response = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch restaurant data");
      }

      const json = await response.json();

      console.log("API Response:", json);

      // Get all cards safely
      const cards = json?.data?.cards ?? [];

      // Find the card which contains restaurants
      const restaurantCard = cards.find((card) =>
        Array.isArray(
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        ),
      );

      // Extract restaurants
      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ??
        [];

      console.log("Restaurant Card:", restaurantCard);
      console.log("Restaurants:", restaurants);

      setListofRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      // console.error("Restaurant API Error:", err);

      setError(true);

      setListofRestaurants([]);
      setFilteredRestaurant([]);
    } finally {
      setIsLoading(false);
    }
  };

  // SEARCH

  const handleSearch = () => {
    const searchValue = searchtext.trim().toLowerCase();

    if (!searchValue) {
      setFilteredRestaurant(listofRestaurants);
      setActiveFilter("all");
      return;
    }

    const filteredRestaurants = listofRestaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchValue),
    );

    setFilteredRestaurant(filteredRestaurants);
    setActiveFilter("search");
  };

  // TOP RATED

  const handleTopRated = () => {
    const filteredRestaurants = listofRestaurants.filter(
      (restaurant) => Number(restaurant?.info?.avgRating) > 4,
    );

    setFilteredRestaurant(filteredRestaurants);

    setActiveFilter("topRated");
  };

  // CLEAR FILTER

  const handleShowAll = () => {
    setFilteredRestaurant(listofRestaurants);

    setSearchText("");

    setActiveFilter("all");
  };

  // ENTER SEARCH

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="body_error">
        <div className="body_error_icon">⚠️</div>

        <h2>You're offline</h2>

        <p>
          Please check your internet connection and try again. You need to be
          online to view the restaurants.
        </p>
      </div>
    );
  }

  // LOADING
  if (isLoading) {
    return <Shimmer />;
  }

  // ERROR
  if (error) {
    return (
      <div className="body_error">
        <div className="body_error_icon">⚠️</div>

        <h2>Something went wrong</h2>

        <p>
          We couldn't load the restaurants right now. Please check your
          connection and try again.
        </p>

        <button className="retry_btn" onClick={fetchData}>
          <span>↻</span>
          Try Again
        </button>
      </div>
    );
  }

  // MAIN UI

  return (
    <main className="body">
      
      {/* HERO */}

      <section className="body_hero">
        <div className="hero_content">
          <div className="hero_badge">
            <span className="hero_badge_dot"></span>
            Discover delicious food near you
          </div>

          <h1>
            What are you
            <span> craving today?</span>
          </h1>

          <p>
            Explore restaurants, discover new dishes, and get your favorites
            delivered to your door.
          </p>
        </div>

        <div className="hero_food_emoji">🍔</div>
      </section>

      {/* =====================================
          FILTER / SEARCH
      ====================================== */}

      <section className="filter">
        <div className="search">
          <div className="search_input_wrapper">
            <img className="search_icon" src={Search_logo} alt="Search" />

            <input
              type="text"
              className="search-box"
              placeholder="Search restaurants or dishes..."
              value={searchtext}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onKeyDown={handleSearchKeyDown}
            />

            {searchtext && (
              <button
                className="clear_search"
                onClick={() => {
                  setSearchText("");
                  setFilteredRestaurant(listofRestaurants);
                  setActiveFilter("all");
                }}
                aria-label="Clear search"
              >
                ×
              </button>
            )}

            <button className="search_btn" onClick={handleSearch}>
              <span>Search</span>
              <span className="search_arrow">→</span>
            </button>
          </div>
        </div>

        {/* FILTER BUTTONS */}

        <div className="filter_actions">
          <button
            className={`filter_btn ${
              activeFilter === "all" ? "filter_active" : ""
            }`}
            onClick={handleShowAll}
          >
            <span>✨</span>
            All Restaurants
          </button>

          <button
            className={`filter_btn ${
              activeFilter === "topRated" ? "filter_active" : ""
            }`}
            onClick={handleTopRated}
          >
            <span>⭐</span>
            Top Rated
          </button>
        </div>
      </section>

      {/* =====================================
          RESULT HEADER
      ====================================== */}

      <div className="result_header">
        <div>
          <h2>
            {activeFilter === "topRated"
              ? "Top Rated Restaurants"
              : activeFilter === "search"
                ? "Search Results"
                : "Restaurants near you"}
          </h2>

          <p>{filteredRestaurant.length} restaurants available</p>
        </div>

        {activeFilter !== "all" && (
          <button className="clear_filter" onClick={handleShowAll}>
            Clear filter
          </button>
        )}
      </div>

      {/* =====================================
          EMPTY STATE
      ====================================== */}

      {filteredRestaurant.length === 0 ? (
        <div className="empty_restaurants">
          <div className="empty_icon">🔍</div>

          <h2>No restaurants found</h2>

          <p>Try searching for something else.</p>

          <button onClick={handleShowAll} className="empty_btn">
            Show all restaurants
          </button>
        </div>
      ) : (
        /* RESTAURANT GRID */

        <div className="res_container">
          {filteredRestaurant.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <ResturantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default Body;
