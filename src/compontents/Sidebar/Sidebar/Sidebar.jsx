import React from "./sidebar.scss";
import {
  CreditCard,
  Dashboard,
  DeliveryDining,
  InsertChart,
  LocalShipping,
  Login,
  Logout,
  NotificationAdd,
  People,
  Person,
  Psychology,
  Settings,
  SettingsSystemDaydream,
  Store,
  SystemSecurityUpdateOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Hope!</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <li>
            <Dashboard className="icon" />

            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <Store className="icon" />
            <span>Orders</span>
          </li>
          <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <CreditCard className="icon" />
            <span>Products</span>
          </li></Link>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <InsertChart className="icon" />
            <span>stats</span>
          </li>
          <li>
            <NotificationAdd className="icon" />
            <span>Notificationsw</span>
          </li>
          <p className="title">SERVICES</p>

          <li>
            <SettingsSystemDaydream className="icon" />
            <span>System Heals</span>
          </li>
          <li>
            <Psychology className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USERS</p>
          <li>
            <Person className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Log Out</span>
          </li>
          <p className="title">THEMS</p>
        </ul>
      </div>

      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
