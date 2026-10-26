import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummyd }) => {
  console.log(dummyd);
  console.log('sujit khilar');
  

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-bottom border-gray-200 text-left flex justify-content-between"
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.category}</p>
          </div>
          <div className="w-3/12 p-4 relative">
          <div>
            <button className="p-2 mx-16 rounded-lg bg-black shadow-lg absolute text-white">Add +</button>
          </div>
            <img src={CDN_URL + item.card.info.imageId} alt="food" className="w-full"/>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default ItemList;
