import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { facultyLogin } from '../redux/action/facultyAction'
import { studentLogin } from '../redux/action/studentAction'
import classnames from 'classnames'

import '../Style/facultyStudentLogin.css'

import Signin from '../Style/Images/Mobile-login.jpg'
import {SiGooglescholar} from 'react-icons/si'
import { SiSemanticscholar } from "react-icons/si";




const FacultyStudentLoginPags = () => {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const [facultyRegNum, setFacultyRegNum] = useState('')
    const [facultyPassword, setFacultyPassword] = useState('')
    const [studentRegNum, setStudentRegNum] = useState('')
    const [studentPassword, setStudentPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [errorsHelper, setErrorsHelper] = useState({})
    const [isFacultyLoading, setIsFacultyLoading] = useState(false)
    const [isStudentLoading, setIsStudentLoading] = useState(false)


    const history = useHistory()

    useEffect(() => {
        if (store.faculty.isAuthenticated) {
            history.push('/faculty')
        }
    }, [store.faculty.isAuthenticated])

    useEffect(() => {
        if (store.error) {
            setErrors(store.error)
        }
    }, [store.error])
    useEffect(() => {
        if (store.student.isAuthenticated) {
            history.push('/home')
        }
    }, [store.student.isAuthenticated])

    useEffect(() => {
        if (store.errorHelper) {
            setErrorsHelper(store.errorHelper)
        }
    }, [store.errorHelper])






    const facultyFormHandler = (e) => {
        e.preventDefault()
        let registrationNumber;
        let password;
        setIsFacultyLoading(true)
        dispatch(facultyLogin({ registrationNumber: facultyRegNum, password: facultyPassword }))
    }

    useEffect(() => {
        if (store.error || store.faculty.isAuthenticated) {
            setIsFacultyLoading(false)
        }
        else {
            setIsFacultyLoading(true)
        }
    }, [store.error, store.faculty.isAuthenticated])

    const studentFormHandler = (e) => {
        e.preventDefault()
        let registrationNumber;
        let password;
        setIsStudentLoading(true)
        dispatch(studentLogin({ registrationNumber: studentRegNum, password: studentPassword }))
    }

    useEffect(() => {
        if (store.errorHelper ||
            store.student.isAuthenticated) {
            setIsStudentLoading(false)
        }
        else {
            setIsStudentLoading(false)
        }

    }, [store.errorHelper, store.student.isAuthenticated])


    return (
      <div className="container-fluid">
        <div className="row" id="trail">
          <div className="col-md-6">
            <img src={Signin} alt="" />
          </div>
          <div className="col-md-6">
            <div className="row m-5">
              <div className="col-md-8 m-auto border rounded-lg bg-light p-4">
                <div>
                  <h3 className="text-center mb-4">
                    {" "}
                    <SiGooglescholar /> FACULTY
                  </h3>
                  <form noValidate onSubmit={facultyFormHandler}>
                    <div className="form-group">
                      <label htmlFor="facRegId">Registration Number</label>
                      <input
                        onChange={(e) => setFacultyRegNum(e.target.value)}
                        type="text"
                        value={facultyRegNum}
                        className={classnames("form-control", {
                          "is-invalid": errors.registrationNumber,
                        })}
                        id="facRegId"
                      />
                      {errors.registrationNumber && (
                        <div className="invalid-feedback">
                          {errors.registrationNumber}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordFacId">Password</label>
                      <input
                        onChange={(e) => setFacultyPassword(e.target.value)}
                        value={facultyPassword}
                        className={classnames("form-control", {
                          "is-invalid": errors.password,
                        })}
                        type="password"
                        id="passwordFacId"
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                      {isFacultyLoading && (
                        <div
                          className="spinner-border text-danger"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                    </div>
                    {!isFacultyLoading && (
                      <button
                        type="submit"
                        className="btn btn-outline-danger btn-block"
                      >
                        Login
                      </button>
                    )}
                  </form>
                  <p className="text-center mt-2">
                    <Link
                      className="text-center text-dark"
                      to="/forgotPassword/faculty"
                    >
                      Forgot Password ?
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="row m-5">
              <div className="col-md-8 m-auto border rounded-lg bg-light p-4">
                <div>
                  <h3 className="text-center mb-4">
                    {" "}
                    <SiSemanticscholar /> STUDENT
                  </h3>
                  <form noValidate onSubmit={studentFormHandler}>
                    <div className="form-group">
                      <label htmlFor="studentId">Registration Number</label>
                      <input
                        onChange={(e) => setStudentRegNum(e.target.value)}
                        type="text"
                        value={studentRegNum}
                        className={classnames("form-control", {
                          "is-invalid": errorsHelper.registrationNumber,
                        })}
                        id="studentId"
                      />
                      {errorsHelper.registrationNumber && (
                        <div className="invalid-feedback">
                          {errorsHelper.registrationNumber}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordId">Password</label>
                      <input
                        onChange={(e) => setStudentPassword(e.target.value)}
                        value={studentPassword}
                        className={classnames("form-control", {
                          "is-invalid": errorsHelper.password,
                        })}
                        type="password"
                        id="passwordId"
                      />
                      {errorsHelper.password && (
                        <div className="invalid-feedback">
                          {errorsHelper.password}
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                      {isStudentLoading && (
                        <div
                          className="spinner-border text-danger"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                    </div>
                    {!isStudentLoading && (
                      <button
                        type="submit"
                        className="btn btn-outline-danger btn-block"
                      >
                        Login
                      </button>
                    )}
                  </form>
                  <p className="text-center">
                    <Link
                      className="text-center text-dark"
                      to="/forgotPassword/student"
                    >
                      Forgot Password ?
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );


}

export default FacultyStudentLoginPags
