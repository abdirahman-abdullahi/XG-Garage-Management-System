import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5050/api/auth/login", {
        email,
        password,
      });

      const user = response.data.user;

      localStorage.setItem("xg_user", JSON.stringify(user));

      if (user.role === "admin") {
        navigate("/admin-dashboard");
      } else if (user.role === "service_advisor") {
        navigate("/service-advisor-dashboard");
      } else if (user.role === "mechanic") {
        navigate("/mechanic-dashboard");
      } else if (user.role === "inventory_manager") {
        navigate("/inventory-dashboard");
      } else if (user.role === "cashier") {
        navigate("/cashier-dashboard");
      } else {
        setMessage("Unknown user role");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Unable to connect to server");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>XG Login</h1>
        <p>Access the garage management system</p>

        {message && <p className="login-message">{message}</p>}

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <Link to="/" className="back-home">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;