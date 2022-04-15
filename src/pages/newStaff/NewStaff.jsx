import "./newStaff.css";

export default function NewStaff() {
  return (
    <div className="newStaff">
      <h1 className="newStaffTitle">New Staff</h1>
      <form className="newStaffFrom">
        <div className="newStaffItem">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newStaffItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="newStaffItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newStaffItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newStaffItem">
          <label>Phone</label>
          <input type="text" placeholder="044 123 456" />
        </div>
        <div className="newStaffItem">
          <label>Address</label>
          <input type="text" placeholder="Gjakovë, Kosovë" />
        </div>
        <div className="newStaffItem">
          <label>Gender</label>
          <div className="newStaffGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newStaffItem">
          <label>Active</label>
          <select className="newStaffSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newStaffButton">Create</button>
      </form>
    </div>
  );
}
