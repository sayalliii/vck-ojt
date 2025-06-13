import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  // Function to close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };


  return (
    <header className="header-container mb-4 border-bottom">
      <div className=" d-flex flex-wrap justify-content-between">
        <Link to="/" className="college-name fs-4 text-decoration-none">Vivekanand College</Link>
        <ul className="nav nav-pills d-none d-md-flex">
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
      {/* Mobile Hamburger Button */}
      <button className="hamburger-menu d-md-none" onClick={toggleDrawer}>        
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      {/* Mobile Drawer Navigation */}
      <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer-btn" onClick={toggleDrawer}>
          ✕
        </button>
        <Link to="/" className="nav-item" onClick={closeDrawer}>
          Home
        </Link>
        <Link to="/aboutpage" className="nav-item" onClick={closeDrawer}>
          About
        </Link>
        <Link to="/coursespage" className="nav-item" onClick={closeDrawer}>
          Courses
        </Link>
        <Link to="/contactpage" className="nav-item" onClick={closeDrawer}>
          Contact
        </Link>
        <Link
          to="/admissionpage"
          className="nav-item btn primary-btn"
          onClick={closeDrawer}
        >
          Apply Now!
        </Link>
      </nav>
       {/* Overlay when drawer is open */}
       {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}
    </header>
  )
}

export default Header
