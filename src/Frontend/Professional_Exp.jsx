// import React from "react";
// import "./Professional_Info.css";
// import { Navigate, useNavigate } from "react-router-dom";
// const Professinal_Exp = () => {
//     const navigate = useNavigate();
//     const handleonClick = () => {
//         navigate('/Education');
//     }
//     const handlePrev = () => {
//         navigate('/PersonalInfo');
//     };
//     return (
//         <div
//             className="PersonalInfo-container"
//             style={{
//                 margin: 0,
//                 fontFamily: "Arial, sans-serif",
//                 backgroundColor: "#121829",
//                 color: "#fff",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100vh",
//             }}
//         >
//             <div className="PersonalInfo-box">
//                 <div>
//                     <h1>
//                         Professional Experience
//                     </h1>
//                     <h2>Add previous job experience</h2>
//                 </div>

//                 <form>
//                     <input type="text" placeholder="Position title" className="input-field1" />
//                     <input type="text" placeholder="Company name" className="input-field1" />
//                     <input type="text" placeholder="City" className="input-field1" />
//                     <input type="text" placeholder="State" className="input-field1" />
//                     <input type="text" placeholder="Address" className="input-field1" />
//                     <label> Start Date :</label>
//                     <input type="date" placeholder="Start date" className="input-field1" />
//                     <label> End Date :</label>
//                     <input type="date" placeholder="End date" className="input-field1" />

//                     <button type="submit" className="save-button">
//                         Save
//                     </button>
//                 </form>
//                 <button type="button" className="next" onClick={() => {
//                     handleonClick();
//                 }}>
//                     Next {'->'}
//                 </button>
//                 <button type="button" className="Prev" onClick={handlePrev}>
//                     Prev {'<-'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Professinal_Exp;


import React, { useState } from "react";
import "./Professional_Info.css";
import { useNavigate } from "react-router-dom";
import { useResume } from "./ResumeContext";

const Professinal_Exp = () => {
  const navigate = useNavigate();
  const { resumeData, updateSection } = useResume();

  const [formData, setFormData] = useState({
    positionTitle: "",
    companyName: "",
    city: "",
    state: "",
    address: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();


    const updatedExperience = [...resumeData.experience, formData];
    updateSection("experience", updatedExperience);


    setFormData({
      positionTitle: "",
      companyName: "",
      city: "",
      state: "",
      address: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleNext = () => {
    navigate("/Education");
  };

  const handlePrev = () => {
    navigate("/PersonalInfo");
  };

  return (
    <div
      className="PersonalInfo-container"
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121829",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="PersonalInfo-box">
        <div>
          <h1>Professional Experience</h1>
          <h2>Add previous job experience</h2>
        </div>

        <form onSubmit={handleSave}>
          <input
            type="text"
            name="positionTitle"
            placeholder="Position title"
            className="input-field1"
            value={formData.positionTitle}
            onChange={handleChange}
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            className="input-field1"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="input-field1"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            className="input-field1"
            value={formData.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input-field1"
            value={formData.address}
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

export default Professinal_Exp;
