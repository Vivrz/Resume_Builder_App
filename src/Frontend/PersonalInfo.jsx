import React from "react";
import "./PersonalInfo.css";

const PersonalInfo = () => {
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
          <input type="text" placeholder="First name" className="input-field1"/>
          <input type="text" placeholder="Last name" className="input-field1"/>
          <input type="tel" pattern="[0-9]+" title="Please enter a valid positive number" required placeholder="Contact Number" className="input-field1" />
          <input type="email" placeholder="Your email" className="input-field1" />
          <input type="text" placeholder="Address" className="input-field1"/>
          
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
        <button type="next" className="next">Next -> </button>
        
      </div>
    </div>
  );
};

export default PersonalInfo;


