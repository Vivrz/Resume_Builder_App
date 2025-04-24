import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "./ResumeContext";
import "./PersonalInfo.css";
import SplitLayout from "./SplitLayout";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const { resumeData, updateSection } = useResume();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    address: "",
  });

  // Load existing data if available
  useEffect(() => {
    if (resumeData.personalInfo) {
      setFormData({
        ...formData,
        ...resumeData.personalInfo
      });
    }
  }, []);

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
    console.log("Saved personal info:", formData);
  };

  const handleNext = () => {
    navigate("/Professional_Exp");
  };

  const handlePrev = () => {
    navigate("/");
  };

  return (
    <SplitLayout 
      title="Personal Information" 
      subtitle="Get Started with the personal information"
    >
      <form onSubmit={handleSave} className="personal-info-form">
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
        
        <div className="navigation-buttons">
          <button type="button" className="prev" onClick={handlePrev}>
            Back to Dashboard
          </button>
          <button type="button" className="next" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </SplitLayout>
  );
};

export default PersonalInfo;
