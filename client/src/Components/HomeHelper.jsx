import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout, newerChats, previousChats} from '../redux/action/studentAction'


const Home = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newerChats(store.student.student.student.name))
        dispatch(previousChats(store.student.student.student.name))
    }, [store.student.newerChats.length])
    const logoutHandler = () => {
        dispatch(studentLogout())
        history.push('/')
    }
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
                <Link
                  to="/home"
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/faculty/updateProfile"
                  className="nav-link"
                >
                  Update Profile
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Academic
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/student/testPerformance">
                    Test Performance
                  </Link>
                  <Link className="dropdown-item" to="/student/attendence">
                    Attendance
                  </Link>
                  <Link className="dropdown-item" to="/student/getAllSubjects">
                    Student Subject List
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  to="/studentDetails"
                  className="nav-link"
                >
                  Students
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/studentDetails"
                  className="nav-link"
                >
                  New Conversation ({store.student.newerChats.length})
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/student/updatePassword"
                  className="nav-link"
                >
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
}

export default Home
