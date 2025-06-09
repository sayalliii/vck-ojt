import React from 'react'
import Header from '../components/Header/Header';
import './HomePage.css'
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <>
     <Header />
     <div className="scroll-area">
        <div className="home-container">
            <div className="hero-section">
            <img src="/images/college-banner.png" alt="College Banner" className="hero-img" />
                <div className="hero-overlay-text">
                    <div className="nameh1"><h1>Welcome to Vivekanand <br/>College!</h1></div>
                    <a className="btn hero-btn" href="/AdmissionPage">Apply Now!</a>
                    <p>Your journey to excellence starts here.</p>

                </div>
            </div>
            <p className="main"> **Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p className="mainp">At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2>Why Choose Vivekanand College?</h2><hr/>
            <ul>
            <li>
              <strong>Legacy of Excellence:</strong> Decades of commitment to
              quality education.
            </li>
            <li>
              <strong>Experienced Faculty:</strong> Learn from renowned experts
              and passionate educators.
            </li>
            <li>
              <strong>Modern Facilities:</strong> Well-equipped labs, expansive
              library, and comfortable campus.
            </li>
            <li>
              <strong>Holistic Development:</strong> Focus on co-curricular
              activities, sports, and community service.
            </li>
            <li>
              <strong>Strong Placements:</strong> Excellent career opportunities
              with leading companies.
            </li>
          </ul>
          <h2>Campus Life & Facilities</h2><hr/>
          <img src="/images/students-studying-DbLGuwF_.jpeg" className="left" ></img>
          <img src="/images/campus-life-Crkero7B.jpg" className="right"></img>
          <p className="clear one">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
          <p className="clear">Ready to explore our courses?</p>

          <Link to="/CoursesPage" className="btn primary-btn">Explore Courses</Link>

        </div>
    </div>
        <Footer/>
        </>
    );
};
export default HomePage;