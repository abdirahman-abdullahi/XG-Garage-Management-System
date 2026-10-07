import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <nav className="home-navbar">
        <div className="home-logo">XG</div>

        <div className="home-nav-links">
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <section className="home-hero">
        <div className="home-content">
          <h1>XG Garage Management System</h1>

          <p>
            XG is a smart garage system designed to manage customers, vehicles,
            job cards, spare parts inventory, compatibility checks, and invoices
            in one place.
          </p>

          <div className="home-buttons">
            <Link to="/login" className="primary-btn">Login</Link>
          </div>
        </div>

        <div className="about-box">
          <h2>About XG</h2>
          <p>
            XG helps garages ensure that only compatible and available parts are
            used when creating job cards. It improves stock control, service
            tracking, and customer management.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;