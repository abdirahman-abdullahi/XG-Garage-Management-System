import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import ServiceAdvisorDashboardPage from "./pages/ServiceAdvisorDashboardPage";
import MechanicDashboardPage from "./pages/MechanicDashboardPage";
import InventoryDashboardPage from "./pages/InventoryDashboardPage";
import CashierDashboardPage from "./pages/CashierDashboardPage";
import ManageUsersPage from "./pages/ManageUsersPage";
import RegisterUserPage from "./pages/RegisterUserPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/service-advisor-dashboard" element={<ServiceAdvisorDashboardPage />} />
        <Route path="/mechanic-dashboard" element={<MechanicDashboardPage />} />
        <Route path="/inventory-dashboard" element={<InventoryDashboardPage />} />
        <Route path="/cashier-dashboard" element={<CashierDashboardPage />} />
        <Route path="/manage-users" element={<ManageUsersPage />} />
        <Route path="/register-users" element={<RegisterUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;