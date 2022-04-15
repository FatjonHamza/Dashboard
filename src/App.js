import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffList from "./pages/Staff list/StaffList";
import Staff from "./pages/Staff/Staff";
import NewStaff from "./pages/newStaff/NewStaff";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/staff" element={<StaffList />} />
          <Route path="/staff/:staffId" element={<Staff />} />
          <Route path="/newStaff" element={<NewStaff />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
