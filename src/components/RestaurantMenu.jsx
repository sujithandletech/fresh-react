import { useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, menuItems, resApi } from "../utils/constants";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

  const prices = [99, 149, 199, 249, 299];

  const [menuWithPrices] = useState(() =>
    menuItems.map((item, index) => ({
      id: index,
      name: item,
      price: prices[Math.floor(Math.random() * prices.length)],
    })),
  );

  if (restaurant === null) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    deliveryTime,
    cuisines = [],
    costForTwo,
    areaName,
    cloudinaryImageId,
    isOpen,
    totalRatingsString,
    locality,
  } = restaurant?.info || {};

    const handleAddToCart = () => {
    setCartCount((count) => count + 1);
  };

  console.log("Cloudinary Image ID:", name);

  return (
    <div className="restaurant-page">
      {/* ================= HERO ================= */}
      <section className="restaurant-hero">
        <div className="hero-image-wrapper">
          <img
            className="restaurant-hero-image"
            src={CDN_URL + cloudinaryImageId}
            alt={`${name || "Restaurant"} food`}
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="restaurant-tag">🍽️ Premium Restaurant</span>

            <h1>{name}</h1>

            <p>{cuisines.join(" • ")}</p>

            <div className="hero-location">
              📍 {areaName}, {locality}
            </div>
          </div>

          <div className={`restaurant-status ${isOpen ? "open" : "closed"}`}>
            <span className="status-dot"></span>
            {isOpen ? "Open Now" : "Closed"}
          </div>
        </div>
      </section>

      {/* ================= RESTAURANT INFO ================= */}
      <section className="restaurant-info-container">
        <div className="restaurant-info-card">
          <div className="info-grid">
            <div className="info-item">
              <span className="info-icon">⭐</span>

              <div>
                <span className="info-label">Rating</span>
                <strong>{avgRating || "N/A"}</strong>
                <small>{totalRatingsString || "No ratings"}</small>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🛵</span>

              <div>
                <span className="info-label">Delivery</span>
                <strong>{deliveryTime || "--"} mins</strong>
                <small>Fast delivery</small>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">💰</span>

              <div>
                <span className="info-label">Cost</span>
                <strong>{costForTwo || "₹--"}</strong>
                <small>For two people</small>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📍</span>

              <div>
                <span className="info-label">Location</span>
                <strong>{areaName || "Unknown"}</strong>
                <small>{locality || ""}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="restaurant-content">
        <div className="menu-section">
          <div className="menu-header">
            <div>
              <span className="menu-eyebrow">OUR MENU</span>

              <h2>
                Explore Our <span>Delicious Menu</span>
              </h2>

              <p>Freshly prepared dishes made specially for you.</p>
            </div>

            <div className="menu-count">{menuWithPrices.length} Items</div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="category-wrapper">
            <button
              className={`category-btn ${
                selectedCategory === "All" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>

            <button
              className={`category-btn ${
                selectedCategory === "Popular" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Popular")}
            >
              🔥 Popular
            </button>

            <button
              className={`category-btn ${
                selectedCategory === "Recommended" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Recommended")}
            >
              ⭐ Recommended
            </button>

            <button
              className={`category-btn ${
                selectedCategory === "Veg" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Veg")}
            >
              🥬 Veg
            </button>
          </div>

          {/* ================= MENU ITEMS ================= */}
          <div className="food-grid">
            {menuWithPrices.map((item, index) => (
              <article className="food-card" key={item.id}>
                <div className="food-card-top">
                  <div className="veg-indicator">
                    <span></span>
                  </div>

                  {index < 3 && (
                    <span className="popular-badge">🔥 Popular</span>
                  )}
                </div>

                <div className="food-card-body">
                  <div className="food-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{item.name}</h3>

                  <p className="food-description">
                    Delicious freshly prepared {item.name.toLowerCase()}
                    made with quality ingredients.
                  </p>

                  <div className="food-bottom">
                    <div className="price-container">
                      <span className="price-label">Starting from</span>

                      <strong>₹{item.price}</strong>
                    </div>

                    <button className="add-btn" onClick={handleAddToCart}>
                      <span>+</span>
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <aside className="order-sidebar">
          <div className="order-card">
            <div className="order-icon">🛒</div>

            <div className="order-card-header">
              <div>
                <span>Your Order</span>
                <h3>Ready to feast?</h3>
              </div>

              <div className="cart-count">{cartCount}</div>
            </div>

            <div className="order-divider"></div>

            {cartCount === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">🥡</div>

                <h4>Your cart is empty</h4>

                <p>Add some delicious items from the menu.</p>
              </div>
            ) : (
              <div className="cart-filled">
                <div className="cart-message">
                  🎉 {cartCount} item{cartCount > 1 ? "s" : ""} added
                </div>

                <button className="checkout-btn">
                  View Cart
                  <span>→</span>
                </button>
              </div>
            )}
          </div>
        </aside>
      </main>

      {/* ================= MOBILE CART ================= */}
      {cartCount > 0 && (
        <div className="mobile-cart-bar">
          <div>
            <strong>{cartCount}</strong>
            <span> item{cartCount > 1 ? "s" : ""}</span>
          </div>

          <button>View Cart →</button>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
