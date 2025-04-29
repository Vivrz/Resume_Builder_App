import React, { useState, useEffect } from "react";
import "./Professional_Info.css";
import { useNavigate } from "react-router-dom";
import { useResume } from "./ResumeContext";
import SplitLayout from "./SplitLayout";

const Professional_Exp = () => {
  const navigate = useNavigate();
  const { resumeData, updateSection } = useResume();

  const [experienceEntries, setExperienceEntries] = useState([]);
  const [currentFormData, setCurrentFormData] = useState({
    title: "",
    company: "",
    city: "",
    state: "",
    address: "",
    startDate: "",
    endDate: "",
  });
  const [editIndex, setEditIndex] = useState(-1);

  // Load existing experience data if available
  useEffect(() => {
    if (resumeData.experience && resumeData.experience.length > 0) {
      setExperienceEntries(resumeData.experience);
    }
  }, [resumeData.experience]); // Include resumeData.experience in the dependency array

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    
    // Validation
    if (!currentFormData.title || !currentFormData.company) {
      alert("Please fill in position title and company name fields.");
      return;
    }

    let updatedEntries = [...experienceEntries];
    
    if (editIndex >= 0) {
      // Edit existing entry
      updatedEntries[editIndex] = currentFormData;
    } else {
      // Add new entry
      updatedEntries.push(currentFormData);
    }
    
    // Update state and context
    setExperienceEntries(updatedEntries);
    updateSection("experience", updatedEntries);
    
    // Reset form
    setCurrentFormData({
      title: "",
      company: "",
      city: "",
      state: "",
      address: "",
      startDate: "",
      endDate: "",
    });
    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    setCurrentFormData(experienceEntries[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEntries = experienceEntries.filter((_, i) => i !== index);
    setExperienceEntries(updatedEntries);
    updateSection("experience", updatedEntries);
    
    // Reset form if currently editing this entry
    if (index === editIndex) {
      setCurrentFormData({
        title: "",
        company: "",
        city: "",
        state: "",
        address: "",
        startDate: "",
        endDate: "",
      });
      setEditIndex(-1);
    }
  };

  const handleNext = () => {
    navigate("/Education");
  };

  const handlePrev = () => {
    navigate("/PersonalInfo");
  };

  return (
    <SplitLayout title="Professional Experience" subtitle="Add previous job experience">
      <div className="experience-form">
        <form onSubmit={handleAddExperience}>
          <input
            type="text"
            name="title"
            placeholder="Position title"
            className="input-field1"
            value={currentFormData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company name"
            className="input-field1"
            value={currentFormData.company}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="input-field1"
            value={currentFormData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            className="input-field1"
            value={currentFormData.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input-field1"
            value={currentFormData.address}
            onChange={handleChange}
          />
          <div className="date-field">
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              className="input-field1"
              value={currentFormData.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="date-field">
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              className="input-field1"
              value={currentFormData.endDate}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="save-button">
            {editIndex >= 0 ? "Update" : "Add"} Experience
          </button>
        </form>

        {experienceEntries.length > 0 && (
          <div className="experience-entries">
            <h3>Your Experience</h3>
            {experienceEntries.map((entry, index) => (
              <div key={index} className="experience-entry">
                <div className="entry-header">
                  <h4>{entry.title} at {entry.company}</h4>
                  <div className="entry-actions">
                    <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
                    <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
                  </div>
                </div>
                <p>{entry.city}, {entry.state}</p>
                <p>{entry.startDate} - {entry.endDate}</p>
              </div>
            ))}
          </div>
        )}

        <div className="navigation-buttons">
          <button type="button" className="prev-button" onClick={handlePrev}>
            Previous {"<-"}
          </button>
          <button type="button" className="next-button" onClick={handleNext}>
            Next {"->"}
          </button>
        </div>
      </div>
    </SplitLayout>
  );
};

export default Professional_Exp;
