import { useEffect, useState }  from "react";
import { resApi } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);   

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        try {
            const response = await fetch(resApi);
            const json = await response.json();
            // console.log("Complete API response:", json);

            const cards = json?.data?.cards ?? [];

            /*
            * find the card containing restaurants
            */
            const restaurantCard = cards.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

            // console.log("All Restaurants:", restaurants);

            // find the restaurant with the matching resId
            const selectedRestaurant = restaurants.find(
                (restaurant) => String(restaurant?.info?.id) === String(resId)
            );

            console.log("URL Restaurant ID:", resId);
            console.log("Selected Restaurant:", selectedRestaurant);

            // restaurant not found
            if (!selectedRestaurant) {
                console.error(`Restaurant with ID ${resId} not found.`);
                setResInfo(null);
                return null;
            }

            setResInfo(selectedRestaurant);
        }  catch (error) {
            console.error("Failed to fetch restaurant data:", error);
        }
    }

    return resInfo;
}

export default useRestaurantMenu;