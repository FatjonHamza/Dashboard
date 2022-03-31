import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <h3>Dashboard</h3>
          </div>

          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
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
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
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
            <h3>Notifications</h3>
          </div>

          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
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
            <h3>Staff</h3>
          </div>

          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
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
      </div>
    </div>
  );
}
