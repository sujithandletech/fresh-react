import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onlineStatus = useOnlineStatus();

  // Header shadow/background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleLogin = () => {
    setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    isActive ? "nav_link active" : "nav_link";

  return (
    <>
      <header className={`header ${scrolled ? "header_scrolled" : ""}`}>
        <div className="header_inner">
          {/* Logo */}
          <div className="logo_container">
            <Link to="/" onClick={closeMenu} className="logo_link">
              <img className="logo" src={LOGO_URL} alt="Food delivery logo" />

              <span className="brand_name">
                Food<span>Express</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav_items">
            <ul className="header_nav">
              <li className="status_nav_item">
                <div
                  className={`online_status ${
                    onlineStatus ? "is_online" : "is_offline"
                  }`}
                  role="status"
                  aria-live="polite"
                  title={
                    onlineStatus
                      ? "You're connected to the internet"
                      : "You're currently offline"
                  }
                >
                  <span className="status_indicator">
                    <span className="status_dot"></span>
                  </span>

                  <span className="status_text">
                    {onlineStatus ? "Online" : "Offline"}
                  </span>

                  <span className="status_tooltip">
                    {onlineStatus
                      ? "Internet connection active"
                      : "Check your internet connection"}
                  </span>
                </div>
              </li>

              <li>
                <NavLink to="/" className={navClass}>
                  <span className="nav_icon">⌂</span>
                  <span>Home</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navClass}>
                  <span className="nav_icon">✦</span>
                  <span>About</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navClass}>
                  <span className="nav_icon">✉</span>
                  <span>Contact</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/grocery" className={navClass}>
                    Grocery
                </NavLink>
              </li>

              <li>
                <NavLink to="/cart" className={navClass}>
                  <span className="nav_icon">🛒</span>
                  <span>Cart</span>

                  {/* Cart badge */}
                  <span className="cart_badge">0</span>
                </NavLink>
              </li>

              <li>
                <button
                  className={`Login ${
                    loginBtn === "Logout" ? "logout_btn" : ""
                  }`}
                  onClick={toggleLogin}
                >
                  <span className="login_user_icon">
                    {loginBtn === "Login" ? "→" : "✓"}
                  </span>

                  <span className="login_text">{loginBtn}</span>
                </button>
              </li>
              
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`menu_toggle ${menuOpen ? "menu_open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`mobile_overlay ${menuOpen ? "overlay_visible" : ""}`}
        onClick={closeMenu}
      ></div>

      <aside className={`mobile_menu ${menuOpen ? "mobile_menu_open" : ""}`}>
        <div className="mobile_menu_header">
          <span>Menu</span>

          <button
            onClick={closeMenu}
            className="mobile_close"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="mobile_user_card">
          <div className="mobile_avatar">
            {loginBtn === "Login" ? "👋" : "✓"}
          </div>

          <div>
            <strong>
              {loginBtn === "Login" ? "Welcome!" : "You're logged in"}
            </strong>

            <p>
              {loginBtn === "Login"
                ? "Login to continue ordering"
                : "Enjoy your delicious food"}
            </p>
          </div>
        </div>

        <nav className="mobile_nav">
          <NavLink to="/" className={navClass} onClick={closeMenu}>
            <span className="mobile_nav_icon">⌂</span>
            <span>Home</span>
            <span className="mobile_nav_arrow">→</span>
          </NavLink>

          <NavLink to="/about" className={navClass} onClick={closeMenu}>
            <span className="mobile_nav_icon">✦</span>
            <span>About Us</span>
            <span className="mobile_nav_arrow">→</span>
          </NavLink>

          <NavLink to="/contact" className={navClass} onClick={closeMenu}>
            <span className="mobile_nav_icon">✉</span>
            <span>Contact Us</span>
            <span className="mobile_nav_arrow">→</span>
          </NavLink>

          <NavLink to="/cart" className={navClass} onClick={closeMenu}>
            <span className="mobile_nav_icon">🛒</span>
            <span>Cart</span>

            <span className="cart_badge mobile_cart_badge">0</span>

            <span className="mobile_nav_arrow">→</span>
          </NavLink>
        </nav>

        <button
          className={`mobile_login_btn ${
            loginBtn === "Logout" ? "logout_btn" : ""
          }`}
          onClick={toggleLogin}
        >
          <span>{loginBtn === "Login" ? "→" : "✓"}</span>

          {loginBtn}
        </button>

        <div className="mobile_menu_footer">
          <span>🍔</span>
          <p>Good food. Good mood.</p>
        </div>
      </aside>
    </>
  );
};

export default Header;
