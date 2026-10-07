import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/RegisterUserPage.css";

function RegisterUserPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5050/api/auth/register",
        formData
      );

      setMessage(response.data.message);

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Server error");
      }
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Register Staff User</h1>
        <p>Create a new user account for XG</p>

        {message && <p className="register-message">{message}</p>}

        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="service_advisor">Service Advisor</option>
            <option value="mechanic">Mechanic</option>
            <option value="inventory_manager">Inventory Manager</option>
            <option value="cashier">Cashier</option>
          </select>

          <button type="submit">Register User</button>
        </form>

        <Link to="/manage-users" className="back-link">
          Back to Manage Users
        </Link>
      </div>
    </div>
  );
}

export default RegisterUserPage;