import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'


const Header = () => {
  return (
    <header className="header-container mb-4 border-bottom">
      <div className=" d-flex flex-wrap justify-content-between">
        <Link to="/" className="college-name fs-4 text-decoration-none">Vivekanand College</Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/HomePage" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/AboutPage" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/CoursesPage" className="nav-link">Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/ContactPage" className="nav-link">Contact</Link>
          </li>
          <li className="what nav-item">
            <Link to="/AdmissionPage" className="btn primary-btn nav-link">Apply Now!</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
