import { Link } from "react-router-dom";
import "../styles/ManageUsersPage.css";

function ManageUsersPage() {
  return (
    <div className="manage-users-page">
      <div className="manage-users-container">
        <div className="manage-users-header">
          <h1>Manage Users</h1>
          <p>Create, view, edit, and remove staff accounts for XG.</p>
        </div>

        <div className="manage-users-actions">
          <div className="user-action-card">
            <h3>Register Staff User</h3>
            <p>Add a new staff member and assign their system role.</p>
            <Link to="/register-users">Register User</Link>
          </div>

          <div className="user-action-card">
            <h3>View Staff Users</h3>
            <p>View all registered staff users in the system.</p>
            <Link to="#">Coming Soon</Link>
          </div>

          <div className="user-action-card">
            <h3>Edit Staff User</h3>
            <p>Update staff details such as phone number, email, or role.</p>
            <Link to="#">Coming Soon</Link>
          </div>

          <div className="user-action-card">
            <h3>Delete Staff User</h3>
            <p>Remove staff accounts that should no longer access XG.</p>
            <Link to="#">Coming Soon</Link>
          </div>
        </div>

        <Link to="/admin-dashboard" className="back-dashboard">
          Back to Admin Dashboard
        </Link>
      </div>
    </div>
  );
}

export default ManageUsersPage;