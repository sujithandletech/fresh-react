import { useState } from "react";
import "./ContactUs.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Contact Form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="contact-page">

      {/* Animated Background */}
      <div className="contact-bg">
        <span className="contact-orb orb-one"></span>
        <span className="contact-orb orb-two"></span>
        <span className="contact-orb orb-three"></span>
      </div>

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">

          <span className="contact-badge">
            💬 We're here to help
          </span>

          <h1>
            Let's talk about
            <span> your food.</span>
          </h1>

          <p>
            Have a question about an order, restaurant, delivery,
            payment, or anything else? Our support team is ready to
            help you.
          </p>

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>&lt; 5 min</strong>
              <span>Average response</span>
            </div>

            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Customer support</span>
            </div>

            <div className="hero-stat">
              <strong>99%</strong>
              <span>Happy customers</span>
            </div>

          </div>
        </div>

        {/* Floating Food Card */}
        <div className="floating-food-card">

          <div className="food-icon">
            🍕
          </div>

          <div>
            <strong>Need help?</strong>
            <span>We're just a message away.</span>
          </div>

          <div className="online-dot"></div>

        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options">

        <div className="section-heading">
          <span>GET IN TOUCH</span>
          <h2>How can we help?</h2>
          <p>
            Choose the easiest way to reach our team.
          </p>
        </div>

        <div className="contact-cards">

          <div className="contact-card">
            <div className="contact-card-icon phone">
              📞
            </div>

            <div>
              <h3>Call us</h3>
              <p>
                Speak directly with our support team.
              </p>

              <a href="tel:+919999999999">
                +91 99999 99999 →
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon email">
              ✉️
            </div>

            <div>
              <h3>Email us</h3>
              <p>
                Send us your questions anytime.
              </p>

              <a href="mailto:support@yourfoodapp.com">
                support@yourfoodapp.com →
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon chat">
              💬
            </div>

            <div>
              <h3>Live chat</h3>
              <p>
                Chat with our support team instantly.
              </p>

              <button className="chat-link">
                Start chatting →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">

        {/* Left information */}
        <div className="contact-info">

          <span className="info-label">
            CONTACT SUPPORT
          </span>

          <h2>
            Tell us what's
            <span> on your mind.</span>
          </h2>

          <p>
            Whether something went wrong with your order or you
            simply want to give us feedback, we'd love to hear from
            you.
          </p>

          <div className="support-list">

            <div className="support-item">
              <div className="support-icon">🚀</div>

              <div>
                <h4>Fast support</h4>
                <p>
                  Our team usually responds within a few minutes.
                </p>
              </div>
            </div>

            <div className="support-item">
              <div className="support-icon">🔒</div>

              <div>
                <h4>Your privacy matters</h4>
                <p>
                  Your information is securely handled.
                </p>
              </div>
            </div>

            <div className="support-item">
              <div className="support-icon">❤️</div>

              <div>
                <h4>Customer first</h4>
                <p>
                  We're always looking for ways to improve your
                  experience.
                </p>
              </div>
            </div>

          </div>

          {/* Availability */}
          <div className="availability">

            <div className="availability-dot"></div>

            <div>
              <strong>Support is online</strong>
              <span>
                Usually replies within 5 minutes
              </span>
            </div>

          </div>

        </div>

        {/* Form */}
        <div className="contact-form-wrapper">

          {submitted ? (
            <div className="success-state">

              <div className="success-animation">
                ✓
              </div>

              <h2>Message sent! 🎉</h2>

              <p>
                Thanks for reaching out. Our team will get back
                to you shortly.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="send-another"
              >
                Send another message
              </button>

            </div>
          ) : (

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-header">
                <h3>Send us a message</h3>

                <p>
                  Fill out the form and we'll get back to you.
                </p>
              </div>

              <div className="form-grid">

                <div className="input-group">
                  <label htmlFor="name">
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="input-group">

                <label htmlFor="subject">
                  What can we help with?
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a topic
                  </option>

                  <option value="order">
                    🍔 Order issue
                  </option>

                  <option value="delivery">
                    🛵 Delivery issue
                  </option>

                  <option value="payment">
                    💳 Payment issue
                  </option>

                  <option value="restaurant">
                    🏪 Restaurant related
                  </option>

                  <option value="refund">
                    💰 Refund
                  </option>

                  <option value="feedback">
                    ❤️ Feedback
                  </option>

                  <option value="other">
                    💬 Something else
                  </option>
                </select>

              </div>

              <div className="input-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-footer">

                <span>
                  🔒 Your information is secure
                </span>

                <button
                  type="submit"
                  className="submit-btn"
                >
                  Send message
                  <span>→</span>
                </button>

              </div>

            </form>

          )}

        </div>

      </section>

      {/* FAQ */}
      <section className="contact-faq">

        <div className="section-heading">

          <span>QUICK ANSWERS</span>

          <h2>
            Frequently asked questions
          </h2>

          <p>
            Looking for a quick answer? You might find it here.
          </p>

        </div>

        <div className="faq-grid">

          <details>
            <summary>
              Where is my order?
              <span>+</span>
            </summary>

            <p>
              You can track your order from the Orders section
              of your account.
            </p>
          </details>

          <details>
            <summary>
              How can I request a refund?
              <span>+</span>
            </summary>

            <p>
              Open your order details and select the support
              option to request help with your order.
            </p>
          </details>

          <details>
            <summary>
              Can I change my delivery address?
              <span>+</span>
            </summary>

            <p>
              Address changes depend on the current status of
              your order. Contact support if you need assistance.
            </p>
          </details>

          <details>
            <summary>
              How can I become a restaurant partner?
              <span>+</span>
            </summary>

            <p>
              Contact our partnership team and we'll guide you
              through the onboarding process.
            </p>
          </details>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="contact-cta">

        <div className="cta-content">

          <span>🍽️ GOOD FOOD. GREAT SERVICE.</span>

          <h2>
            We're always happy
            <br />
            to hear from you.
          </h2>

          <p>
            Your feedback helps us make the experience better
            for everyone.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 500,
                behavior: "smooth",
              })
            }
          >
            Contact support
            <span>→</span>
          </button>

        </div>

      </section>

    </main>
  );
};

export default Contact;