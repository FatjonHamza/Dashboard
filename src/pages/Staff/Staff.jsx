import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./staff.css";

export default function Staff() {
  return (
    <div className="staff">
      <div className="staffTitleContainer">
        <h1 className="staffTitle">Edit Staff</h1>
        {/* adds the Id to the url and so you need to fix it*/}
        <Link to="newStaff">
          <button className="staffAddButton">Create</button>
        </Link>
      </div>
      <div className="staffContaniner">
        <div className="staffShow">
          <div className="staffShowTop">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="curly"
              className="staffShowImg"
            />
            <div className="staffShowTopTitle">
              <span className="userShowUsername">Ardit Geci</span>
              <span className="userShowUserTitle">Web Developer</span>
            </div>
          </div>
          <div className="staffShowBottom">
            <span className="staffShowTitle">Account Details</span>
            <div className="staffShowInfo">
              <PermIdentity className="staffShowIcon" />
              <span className="staffShowInfoTitle">arditi69</span>
            </div>
            <div className="staffShowInfo">
              <CalendarToday className="staffShowIcon" />
              <span className="staffShowInfoTitle">10.12.1998</span>
            </div>
            <span className="staffShowTitle">Contact Details</span>
            <div className="staffShowInfo">
              <PhoneAndroid className="staffShowIcon" />
              <span className="staffShowInfoTitle">044 256 354</span>
            </div>
            <div className="staffShowInfo">
              <MailOutline className="staffShowIcon" />
              <span className="staffShowInfoTitle">arditi69@gmail.com</span>
            </div>
            <div className="staffShowInfo">
              <LocationSearching className="staffShowIcon" />
              <span className="staffShowInfoTitle">Janosh, Kosovë</span>
            </div>
          </div>
        </div>
        <div className="staffUpdate">
          <span className="staffUpdateTitle">Edit</span>
          <form className="staffUpdateForm">
            <div className="staffUpdateLeft">
              <div className="staffUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="arditi69"
                  className="staffUpdateInput"
                />
              </div>
              <div className="staffUpdateItem">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="Ardit Geci"
                  className="staffUpdateInput"
                />
              </div>
              <div className="staffUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="arditi69@gmail.com"
                  className="staffUpdateInput"
                />
              </div>
              <div className="staffUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="044 256 354"
                  className="staffUpdateInput"
                />
              </div>
              <div className="staffUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Janosh, Kosovë
                  "
                  className="staffUpdateInput"
                />
              </div>
            </div>
            <div className="staffUpdateRight">
              <div className="staffUpdateUpload">
                <img
                  className="staffUpdateImg"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="sick"
                />
                <label htmlFor="file">
                  <Publish className="staffUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="staffUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
