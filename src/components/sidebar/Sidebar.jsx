import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Group,
  Assignment,
  CalendarMonth,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <h3>Dashboard</h3>
          </div>

          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <h3>Quick Menu</h3>
          </div>

          <ul className="sidebarList">
            <Link to="/staff" className="link">
              <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                Staff
              </li>
            </Link>
            <li className="sidebarListItem">
              <Assignment className="sidebarIcon" />
              Tasks
            </li>
            <li className="sidebarListItem">
              <CalendarMonth className="sidebarIcon" />
              Calendar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
