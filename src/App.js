
import React from 'react';
import './App.css';
import Dashboard from './Frontend/DashBoard';
import LoginPage from './Frontend/LoginPage';
import SignUpPage from './Frontend/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/Login" element={<LoginPage />} />
         <Route path="/SignUp" element={<SignUpPage />} />
       </Routes>
     </Router>
 
  );
}

export default App;

