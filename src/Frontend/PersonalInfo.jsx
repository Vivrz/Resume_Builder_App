import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "./ResumeContext";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const { updateSection } = useResume();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSection("personalInfo", formData);
    console.log(formData);
    setFormData({
      firstName: "",
    lastName: "",
    contact: "",
    email: "",
    address: ""
    });
  };

  const handleNext = () => {
    navigate("/Professional_Exp");
  };

  const handlePrev = () => {
    navigate("/");
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

        <form onSubmit={handleSave}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="input-field1"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="input-field1"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="contact"
            pattern="[0-9]+"
            title="Please enter a valid number"
            required
            placeholder="Contact Number"
            className="input-field1"
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input-field1"
            value={formData.email}
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

          <button type="submit" className="save-button">
            Save
          </button>
        </form>

        <button type="button" className="next" onClick={handleNext}>
          Next {"->"}
        </button>
        <button type="button" className="prev" onClick={handlePrev}>
          Back to Dashboard {"<-"}
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
