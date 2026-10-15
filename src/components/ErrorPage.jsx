// import { useRouteError } from "react-router-dom";

// const ErrorPage = () => {
//   const err = useRouteError();
//   console.log(err);

//   return (
//     <>
//       <h1>Error</h1>
//       <h3>{err.status}: {err.statusText}</h3>
//     </>
//   );
// };

// export default ErrorPage;

import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="error-page">
      {/* Animated background */}
      <div className="error-bg">
        <span className="gradient-orb orb-one"></span>
        <span className="gradient-orb orb-two"></span>
        <span className="gradient-orb orb-three"></span>
      </div>

      {/* Floating food emojis */}
      <div className="floating-food food-one">🍕</div>
      <div className="floating-food food-two">🍔</div>
      <div className="floating-food food-three">🍟</div>
      <div className="floating-food food-four">🥤</div>
      <div className="floating-food food-five">🌮</div>

      <main className="error-container">
        {/* 404 Illustration */}
        <div className="error-illustration">
          <div className="plate">
            <div className="plate-inner"></div>
          </div>

          <div className="burger">
            <div className="burger-top">
              <span className="sesame sesame-one"></span>
              <span className="sesame sesame-two"></span>
              <span className="sesame sesame-three"></span>
              <span className="sesame sesame-four"></span>
            </div>

            <div className="burger-cheese"></div>
            <div className="burger-patty"></div>
            <div className="burger-lettuce"></div>
            <div className="burger-bottom"></div>
          </div>

          <div className="error-number">404</div>
        </div>

        {/* Content */}
        <section className="error-content">
          <div className="error-badge">
            <span className="status-dot"></span>
            Oops! Page not found
          </div>

          <h1>
            Looks like this dish
            <span> went missing.</span>
          </h1>

          <p>
            The page you're looking for may have been moved, removed,
            or the link might be incorrect. Don't worry, there are plenty
            of delicious things waiting for you.
          </p>

          {/* Search */}
          <div className="error-search">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search for restaurants, dishes..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const value = e.target.value.trim();

                  if (value) {
                    navigate(`/?search=${encodeURIComponent(value)}`);
                  }
                }
              }}
            />

            <button
              onClick={() => {
                const input = document.querySelector(".error-search input");

                if (input?.value.trim()) {
                  navigate(
                    `/?search=${encodeURIComponent(input.value.trim())}`
                  );
                }
              }}
            >
              Search
            </button>
          </div>

          {/* Actions */}
          <div className="error-actions">
            <button className="home-btn" onClick={handleGoHome}>
              <span>⌂</span>
              Back to Home
            </button>

            <button className="back-btn" onClick={handleGoBack}>
              <span>←</span>
              Go Back
            </button>
          </div>

          {/* Helpful links */}
          <div className="quick-links">
            <span>Looking for something?</span>

            <button onClick={() => navigate("/")}>
              Restaurants
            </button>

            <button onClick={() => navigate("/")}>
              Offers
            </button>

            <button onClick={() => navigate("/")}>
              Orders
            </button>
          </div>
        </section>
      </main>

      {/* Bottom decoration */}
      <div className="bottom-wave"></div>
    </div>
  );
};

export default ErrorPage;
