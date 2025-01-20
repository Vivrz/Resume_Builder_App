import React from "react";
import { useNavigate } from "react-router-dom";
import "./Professional_Info.css";
import "./PersonalInfo.jsx";


const Professional_Exp = () => {
  const navigate = useNavigate(); 

  const handleNext = () => {
    navigate("/Education"); 
  };
  const handlePrev = () => {
    navigate("/PersonalInfo"); 
  };

  return (
    <div
      className="ProfessionalInfo-container"
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
      <div className="ProfessionalInfo-box">
        <div>
          <h1>Professional Experience</h1>
          <h2>Add previous job experience</h2>
        </div>

        <form>
          <input type="text" placeholder="Position title" className="input-field1" />
          <input type="text" placeholder="Company name" className="input-field1" />
          <input type="text" placeholder="City" className="input-field1" />
          <input type="text" placeholder="State" className="input-field1" />
          <input type="text" placeholder="Address" className="input-field1" />
          <label> Start Date :</label>
          <input type="date" placeholder="Start date" className="input-field1" />
          <label> End Date :</label>
          <input type="date" placeholder="End date" className="input-field1" />

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
        <button type="button" className="next" onClick={handleNext}>
          Next {'->'}
        </button>
        <button type="button" className="Prev" onClick={handlePrev}>
          Prev {'<-'}
        </button>
      </div>
    </div>
  );
};

export default Professional_Exp;
