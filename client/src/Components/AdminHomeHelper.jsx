import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminLogout } from "../redux/action/adminAction";

const Home = () => {
  const store = useSelector((store) => store);
  const [name, setName] = useState("");
  useEffect(() => {
    if (store.admin.admin.name) {
      setName(store.admin.admin.name);
    }
  }, [store.admin.admin.name]);
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(adminLogout());
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
              <Link to="/admin" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/addFaculty" className="nav-link">
                Add Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/addStudent" className="nav-link">
                Add Student
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/addSubject" className="nav-link">
                Add Subject
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/addAdmin" className="nav-link">
                Add Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/allFaculties" className="nav-link">
                Our Faculties
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/allStudents" className="nav-link">
                Our Students
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/allSubject" className="nav-link">
                Subjects
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button
            style={{ listStyle: "None" }}
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
