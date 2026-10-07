import { Link } from "react-router-dom";
import "../styles/ServiceAdvisorDashboardPage.css";

function ServiceAdvisorDashboardPage() {
  const user = JSON.parse(localStorage.getItem("xg_user"));

  return (
    <div className="service-dashboard">

      {/* SIDEBAR */}
      <div className="service-sidebar">
        <h2>XG Service</h2>

        <Link to="/service-advisor-dashboard">Dashboard</Link>

        <Link to="/add-customer">Add Customer</Link>

        <Link to="/view-customers">View Customers</Link>

        <Link to="#">Add Vehicle</Link>

        <Link to="#">Search Vehicle</Link>

        <Link to="#">Create Job Card</Link>

        <Link to="#">Assign Mechanic</Link>

        <Link to="#">Track Job Status</Link>

        <Link to="/">Logout</Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="service-main">

        <div className="service-header">
          <h1>Service Advisor Dashboard</h1>

          <p>
            Welcome, {user?.full_name || "Service Advisor"}
          </p>
        </div>

        {/* CARDS */}
        <div className="service-cards">

          <div className="service-card">
            <h3>Add Customer</h3>

            <p>
              Register new garage customers into the system.
            </p>

            <Link to="/add-customer">
              Open
            </Link>
          </div>

          <div className="service-card">
            <h3>View Customers</h3>

            <p>
              View and manage all registered customers.
            </p>

            <Link to="/view-customers">
              Open
            </Link>
          </div>

          <div className="service-card">
            <h3>Add Vehicle</h3>

            <p>
              Add customer vehicle details and chassis numbers.
            </p>

            <Link to="#">
              Coming Soon
            </Link>
          </div>

          <div className="service-card">
            <h3>Search Vehicle</h3>

            <p>
              Search vehicles using number plate or chassis number.
            </p>

            <Link to="#">
              Coming Soon
            </Link>
          </div>

          <div className="service-card">
            <h3>Create Job Card</h3>

            <p>
              Create service and repair job cards for vehicles.
            </p>

            <Link to="#">
              Coming Soon
            </Link>
          </div>

          <div className="service-card">
            <h3>Assign Mechanic</h3>

            <p>
              Assign mechanics to active job cards.
            </p>

            <Link to="#">
              Coming Soon
            </Link>
          </div>

          <div className="service-card">
            <h3>Track Job Status</h3>

            <p>
              Monitor the progress of vehicle repairs and servicing.
            </p>

            <Link to="#">
              Coming Soon
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServiceAdvisorDashboardPage;