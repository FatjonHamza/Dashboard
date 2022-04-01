import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffList from "./pages/Users list/StaffList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
            <Route path="/staff" element={<StaffList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
