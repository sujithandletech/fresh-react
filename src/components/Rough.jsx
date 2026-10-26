import { useEffect } from "react";
import RestaurantCategory from "./RestaurantCatogory";
import resMenu from "../utils/resmenu";

const Rough = () => {
  

  return <>
   <h1>{resMenu.data.cards[0].card.card.text}</h1>
  </>;
};

export default Rough;
