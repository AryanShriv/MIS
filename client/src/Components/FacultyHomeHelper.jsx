import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { facultyLogout } from "../redux/action/facultyAction";

const Home = () => {
  const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  useEffect(() => {
    if (store.faculty.faculty.faculty.name) {
      setName(store.faculty.faculty.faculty.name);
    }
  }, [store.faculty.faculty.faculty.name]);
  const logoutHandler = () => {
    dispatch(facultyLogout());
    history.push("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container font-weight-bold">
        <div className="d-flex align-items-center">
          <span className="navbar-brand">SOIT</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faculty/updateProfile" className="nav-link">
                Update Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/attendenceFaculty" className="nav-link">
                Mark Attendance
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faculty/uploadMarks" className="nav-link">
                Upload Marks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faculty/updatePassword" className="nav-link">
                Update Password
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <button
            onClick={logoutHandler}
            type="button"
            className="btn btn-danger"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Home;
