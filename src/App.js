
import React from 'react';
import './App.css';
import Dashboard from './Frontend/DashBoard';
import LoginPage from './Frontend/LoginPage';
import SignUpPage from './Frontend/SignUp';
import PersonalInfo from './Frontend/PersonalInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Professional_Exp from './Frontend/Professional_Exp'; 
import Education from './Frontend/Education';

import Skills from './Frontend/Skills';
function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/Login" element={<LoginPage />} />
         <Route path="/SignUp" element={<SignUpPage />} />
         <Route path='/PersonalInfo' element={<PersonalInfo/>} />
         <Route path='/Professional_Exp' element={<Professional_Exp/>} />
         <Route path='/Education' element={<Education/>} />
         <Route path='/Skills' element={<Skills/>} />
       </Routes>
     </Router>
   
  );
}

export default App;

