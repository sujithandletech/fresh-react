import React from "react";
import "./AboutUs.css";
import User from "./User";
import Userclass from "./Userclass";

const AboutUs = () => {
  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
      icon: "😊",
    },
    {
      number: "2K+",
      label: "Restaurants",
      icon: "🍽️",
    },
    {
      number: "50K+",
      label: "Orders Delivered",
      icon: "🛵",
    },
    {
      number: "4.8",
      label: "Average Rating",
      icon: "⭐",
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Get your favorite meals delivered quickly while they are still fresh and delicious.",
    },
    {
      icon: "🍕",
      title: "Endless Choices",
      description:
        "Discover thousands of dishes, restaurants, cuisines and flavors in one place.",
    },
    {
      icon: "💳",
      title: "Easy Payments",
      description:
        "Enjoy a smooth and secure checkout experience with multiple payment options.",
    },
    {
      icon: "🛡️",
      title: "Safe & Reliable",
      description:
        "Your orders and payments are protected with a secure and reliable experience.",
    },
    {
      icon: "📍",
      title: "Live Tracking",
      description:
        "Track your order in real time and know exactly when your food will arrive.",
    },
    {
      icon: "💙",
      title: "Made For You",
      description:
        "Personalized recommendations help you discover food you'll love.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: "🔍",
      title: "Discover",
      description: "Find restaurants and dishes you'll love.",
    },
    {
      number: "02",
      icon: "🛒",
      title: "Order",
      description: "Choose your favorites and place your order.",
    },
    {
      number: "03",
      icon: "🛵",
      title: "Track",
      description: "Follow your order from kitchen to doorstep.",
    },
    {
      number: "04",
      icon: "😋",
      title: "Enjoy",
      description: "Sit back, relax and enjoy your delicious meal.",
    },
  ];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="hero-background-circle circle-one"></div>
        <div className="hero-background-circle circle-two"></div>

        <div className="floating-food food-one">🍕</div>
        <div className="floating-food food-two">🍔</div>
        <div className="floating-food food-three">🍟</div>
        <div className="floating-food food-four">🥤</div>

        <div className="about-hero-content">
          <span className="hero-badge">
            <span className="pulse-dot"></span>
            More than just food delivery
          </span>

          <h1>
            Good food.
            <br />
            <span>Good mood.</span>
          </h1>

          <p>
            We connect you with amazing restaurants and delicious food, making
            every meal easier, faster and more enjoyable.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Restaurants
              <span>→</span>
            </button>

            <button className="secondary-btn">Our Story</button>
          </div>
        </div>

        <div className="hero-food-card">
          <div className="food-card-glow"></div>

          <div className="food-image">🍜</div>

          <div className="food-card-info">
            <div>
              <h3>Delicious Ramen</h3>
              <p>Fresh • Hot • Delivered</p>
            </div>

            <div className="rating">⭐ 4.9</div>
          </div>

          <div className="delivery-status">
            <span className="status-icon">🛵</span>
            <div>
              <strong>On the way</strong>
              <small>Arriving in 18 min</small>
            </div>
            <span className="check">✓</span>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div
              className="stat-card"
              key={stat.label}
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>

              <div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="story-image-wrapper">
          <div className="story-image">
            <span>🍜</span>
            <span>🍔</span>
            <span>🍕</span>
            <span>🥗</span>
          </div>

          <div className="experience-card">
            <strong>5+</strong>
            <span>
              Years of
              <br />
              serving food lovers
            </span>
          </div>
        </div>

        <div className="story-content">
          <span className="section-label">OUR STORY</span>

          <h2>
            Food brings
            <span> people together.</span>
          </h2>

          <p>
            We started with a simple idea — ordering great food should be
            exciting, effortless and accessible to everyone.
          </p>

          <p>
            Today, we're building a food delivery experience that connects
            hungry customers with passionate restaurants and delivery partners.
          </p>

          <div className="story-highlight">
            <span>❤️</span>

            <div>
              <strong>Made with love</strong>
              <p>Every feature we build starts with our customers in mind.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span className="section-label">WHY CHOOSE US</span>

          <h2>
            Everything you need,
            <span> in one place.</span>
          </h2>

          <p>
            We've designed every part of the experience to make food ordering
            simple and enjoyable.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={feature.title}
              style={{ "--delay": `${index * 0.08}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className="feature-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="steps-section">
        <div className="section-heading">
          <span className="section-label">HOW IT WORKS</span>

          <h2>
            From craving to
            <span> doorstep.</span>
          </h2>

          <p>Getting your favorite food is easier than ever.</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>

              <div className="step-icon">{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {index !== steps.length - 1 && <div className="step-line">→</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <span className="section-label">OUR MISSION</span>

          <h2>
            Making every meal
            <br />
            <span>worth remembering.</span>
          </h2>

          <p>
            Great food shouldn't be complicated. Our mission is to create a
            seamless connection between people, restaurants and the food they
            love.
          </p>

          <div className="mission-points">
            <div>
              <span>✓</span>
              <p>Support local restaurants</p>
            </div>

            <div>
              <span>✓</span>
              <p>Create better food experiences</p>
            </div>

            <div>
              <span>✓</span>
              <p>Make delivery simple and reliable</p>
            </div>
          </div>
        </div>

        <div className="mission-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="mission-food">🍱</div>

          <div className="mission-bubble bubble-one">🍕</div>

          <div className="mission-bubble bubble-two">❤️</div>

          <div className="mission-bubble bubble-three">⭐</div>
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-decoration decoration-one">🍕</div>
        <div className="cta-decoration decoration-two">🍔</div>
        <div className="cta-decoration decoration-three">🍟</div>

        <div className="cta-content">
          <span className="cta-label">HUNGRY YET?</span>

          <h2>
            Your next favorite meal
            <br />
            is just a click away.
          </h2>

          <p>Discover delicious food from restaurants around you.</p>

          <button className="cta-button">
            Order Now
            <span>→</span>
          </button>
        </div>
      </section>
      <User name={"sujit(function)"} />
      {/* <Userclass name={"sujit(class)"} location={"galaxy"} /> */}
    </main>
  );
};

export default AboutUs;
