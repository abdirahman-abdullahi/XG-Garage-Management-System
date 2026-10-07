import { Link } from "react-router-dom";
import "../styles/AdminDashboardPage.css";

function AdminDashboardPage() {
  const user = JSON.parse(localStorage.getItem("xg_user"));

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <h2>XG Admin</h2>

        <Link to="/admin-dashboard">Dashboard</Link>
        <Link to="/manage-users">Manage Users</Link>
        <Link to="#">Customers</Link>
        <Link to="#">Vehicles</Link>
        <Link to="#">Job Cards</Link>
        <Link to="#">Inventory / Parts</Link>
        <Link to="#">Part Compatibility</Link>
        <Link to="#">Suppliers</Link>
        <Link to="#">Invoices</Link>
        <Link to="#">Reports</Link>
        <Link to="/">Logout</Link>
      </div>

      <div className="admin-main">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome, {user?.full_name || "Admin"}</p>
        </div>

        <div className="admin-cards">
          <div className="admin-card">
            <h3>Manage Users</h3>
            <p>Create and manage staff accounts.</p>
            <Link to="/manage-users">Open</Link>
          </div>

          <div className="admin-card">
            <h3>Customers</h3>
            <p>Register and manage garage customers.</p>
            <Link to="#">Coming Soon</Link>
          </div>

          <div className="admin-card">
            <h3>Vehicles</h3>
            <p>Manage customer vehicles and chassis details.</p>
            <Link to="#">Coming Soon</Link>
          </div>

          <div className="admin-card">
            <h3>Job Cards</h3>
            <p>Create job cards and assign work.</p>
            <Link to="#">Coming Soon</Link>
          </div>

          <div className="admin-card">
            <h3>Inventory</h3>
            <p>Manage spare parts, stock, and pricing.</p>
            <Link to="#">Coming Soon</Link>
          </div>

          <div className="admin-card">
            <h3>Compatibility</h3>
            <p>Check which parts fit which vehicles.</p>
            <Link to="#">Coming Soon</Link>
          </div>

          <div className="admin-card">
            <h3>Suppliers</h3>
            <p>Manage parts suppliers and purchases.</p>
            <Link to="#">Coming Soon</Link>
          </div>

          <div className="admin-card">
            <h3>Invoices</h3>
            <p>View generated invoices and payment status.</p>
            <Link to="#">Coming Soon</Link>
          </div>

          <div className="admin-card">
            <h3>Reports</h3>
            <p>View revenue, stock, and job reports.</p>
            <Link to="#">Coming Soon</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;