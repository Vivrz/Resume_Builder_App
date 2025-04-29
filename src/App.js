
import React from 'react';
import './App.css';
import Dashboard from './Frontend/DashBoard';
import LoginPage from './Frontend/LoginPage';
import SignUpPage from './Frontend/SignUp';
import PersonalInfo from './Frontend/PersonalInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfessionalExp from './Frontend/ProfessionalExp'; 
import Education from './Frontend/Education';
import AboutUs from './Frontend/AboutUs'
import Skills from './Frontend/Skills';
import ResumePreview from "./Frontend/ResumePreview";
function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/Login" element={<LoginPage />} />
         <Route path="/SignUp" element={<SignUpPage />} />
         <Route path='/PersonalInfo' element={<PersonalInfo/>} />
         <Route path='/ProfessionalExp' element={<ProfessionalExp/>} />
         <Route path='/Education' element={<Education/>} />
         <Route path='/Skills' element={<Skills/>} />
         <Route path='/AboutUs' element={<AboutUs/>} />
         <Route path="/Preview" element={<ResumePreview />} />
       </Routes>
     </Router>
   
  );
}

export default App;
