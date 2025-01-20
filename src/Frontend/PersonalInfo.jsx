import React from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const navigate = useNavigate(); 

  const handleNext = () => {
    navigate("/Professional_Exp"); 
  };
  const handlePrev = () => {
    navigate("/#"); 
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
          <h1>Personal Information</h1>
          <h2>Get Started with the personal information</h2>
        </div>

        <form>
          <input type="text" placeholder="First name" className="input-field1" />
          <input type="text" placeholder="Last name" className="input-field1" />
          <input
            type="tel"
            pattern="[0-9]+"
            title="Please enter a valid positive number"
            required
            placeholder="Contact Number"
            className="input-field1"
          />
          <input type="email" placeholder="Your email" className="input-field1" />
          <input type="text" placeholder="Address" className="input-field1" />

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
        <button type="button" className="next" onClick={handleNext}>
          Next {'->'}
        </button>
        <button type="button" className="prev" onClick={handlePrev}>
          Back to DashBoard {'<-'}
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
