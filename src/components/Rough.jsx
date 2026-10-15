import React from 'react'
import { useEffect } from "react";

const Rough = () => {
    useEffect(()=> {
        const fetchMenu = async () => {
            const url = "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId=803209&catalog_qa=undefined&submitAction=ENTER";
            // const url = "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            try{
                const response = await fetch(url);
                // console.log("Status:", response.status);
                // console.log("Response Ok: ", response.ok);

                const json = await response.json();

                // console.log("Menu API Response:", json);

            } catch(error){
                // console.log("Menu API Error:", error);
                
            }
        }
        fetchMenu();
    }, []);

    console.log("Rough component rendered");

    return (
        <div>
            <h1>Restaurant Menu</h1>
        </div>
    );
}

export default Rough