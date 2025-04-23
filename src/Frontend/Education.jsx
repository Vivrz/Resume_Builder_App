
// import React from "react";
// import "./Education.css";
// import { useNavigate } from "react-router-dom";
// import "./Professional_Exp.jsx";

// const Education = () => {
//     const navigate = useNavigate();

//     const handleNext = () => {
//         navigate('/Skills');
//     };

//     const handlePrev = () => {
//         navigate('/Professional_Exp');
//     };

//     return (
//         <div className="Education-container">
//             <div className="Education-box">
//                 <div>
//                     <h1>Education</h1>
//                     <h2>Add your education details</h2>
//                 </div>

//                 <form>
//                     <input type="text" placeholder="University Name" className="input-field1" />
//                     <input type="text" placeholder="Degree" className="input-field1" />
//                     <input type="text" placeholder="Major" className="input-field1" />
//                     <label> Start Date :</label>
//                     <input type="date" placeholder="Start date" className="input-field1" />
//                     <label> End Date :</label>
//                     <input type="date" placeholder="End date" className="input-field1" />
//                     <label htmlFor="description">Description</label>
//                     <textarea id="description" name="description" rows="4" placeholder="Enter your education details here..."></textarea>
//                     <button type="submit" className="save-button">
//                         Save
//                     </button>
//                 </form>
    
                   
//                     <button type="button" className="next" onClick={handleNext}>
//                         Next {'->'}
//                     </button>
//                     <button type="button" className="Prev" onClick={handlePrev}>
//                         Prev {'<-'}
//                     </button>
//                 </div>
//             </div>
//     );
// };

// export default Education;

import React, { useState } from "react";
import "./Education.css";
import { useNavigate } from "react-router-dom";
import { useResume } from "./ResumeContext";

const Education = () => {
  const navigate = useNavigate();
  const { resumeData, updateSection } = useResume();

  const [formData, setFormData] = useState({
    universityName: "",
    degree: "",
    major: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Add new education entry
    const updatedEducation = [...resumeData.education, formData];
    updateSection("education", updatedEducation);

    // Optionally clear the form
    setFormData({
      universityName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleNext = () => {
    navigate('/Skills');
  };

  const handlePrev = () => {
    navigate('/Professional_Exp');
  };

  return (
    <div className="Education-container">
      <div className="Education-box">
        <div>
          <h1>Education</h1>
          <h2>Add your education details</h2>
        </div>

        <form onSubmit={handleSave}>
          <input
            type="text"
            name="universityName"
            placeholder="University Name"
            className="input-field1"
            value={formData.universityName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            className="input-field1"
            value={formData.degree}
            onChange={handleChange}
          />
          <input
            type="text"
            name="major"
            placeholder="Major"
            className="input-field1"
            value={formData.major}
            onChange={handleChange}
          />
          <label> Start Date :</label>
          <input
            type="date"
            name="startDate"
            className="input-field1"
            value={formData.startDate}
            onChange={handleChange}
          />
          <label> End Date :</label>
          <input
            type="date"
            name="endDate"
            className="input-field1"
            value={formData.endDate}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Enter your education details here..."
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="save-button">
            Save
          </button>
        </form>

        <button type="button" className="next" onClick={handleNext}>
          Next {"->"}
        </button>
        <button type="button" className="Prev" onClick={handlePrev}>
          Prev {"<-"}
        </button>
      </div>
    </div>
  );
};

export default Education;
