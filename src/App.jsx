import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Courses from './pages/CoursesPage'
import Contact from './pages/ContactPage'
import Admission from './pages/AdmissionPage'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup'

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sayali Sunil Yadav"
          studentPhotoUrl="/images/image copy.png" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills."
        />
      </div>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/homepage" element={<Home />} />
        <Route path="/aboutpage" element={<About/>}/>
        <Route path="/coursespage" element={<Courses/>}/>
        <Route path="/contactpage" element={<Contact/>}/>
        <Route path="/admissionpage" element={<Admission/>}/>
      </Routes>
      <ChatbotComponent/>
    </Router>
    </>
  );
};
export default App