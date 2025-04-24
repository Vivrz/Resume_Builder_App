import React, { useState, useEffect } from "react";
import "./Education.css";
import { useNavigate } from "react-router-dom";
import { useResume } from "./ResumeContext";
import SplitLayout from "./SplitLayout";

const Education = () => {
  const navigate = useNavigate();
  const { resumeData, updateSection } = useResume();

  const [educationEntries, setEducationEntries] = useState([]);
  const [currentFormData, setCurrentFormData] = useState({
    university: "",
    degree: "",
    major: "",
    startDate: "",
    endDate: "",
    description: ""
  });
  const [editIndex, setEditIndex] = useState(-1);

  // Load existing education data if available
  useEffect(() => {
    if (resumeData.education && resumeData.education.length > 0) {
      setEducationEntries(resumeData.education);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    
    // Validation
    if (!currentFormData.university || !currentFormData.degree) {
      alert("Please fill in university and degree fields.");
      return;
    }

    let updatedEntries = [...educationEntries];
    
    if (editIndex >= 0) {
      // Edit existing entry
      updatedEntries[editIndex] = currentFormData;
    } else {
      // Add new entry
      updatedEntries.push(currentFormData);
    }
    
    // Update state and context
    setEducationEntries(updatedEntries);
    updateSection("education", updatedEntries);
    
    // Reset form
    setCurrentFormData({
      university: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: ""
    });
    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    setCurrentFormData(educationEntries[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEntries = educationEntries.filter((_, i) => i !== index);
    setEducationEntries(updatedEntries);
    updateSection("education", updatedEntries);
    
    // Reset form if currently editing this entry
    if (index === editIndex) {
      setCurrentFormData({
        university: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        description: ""
      });
      setEditIndex(-1);
    }
  };

  const handleNext = () => {
    navigate("/Skills");
  };

  const handlePrev = () => {
    navigate("/Professional_Exp");
  };

  return (
    <SplitLayout title="Education" subtitle="Add your education details">
      <div className="education-form">
        <form onSubmit={handleAddEducation}>
          <input
            type="text"
            name="university"
            placeholder="University Name"
            className="input-field1"
            value={currentFormData.university}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            className="input-field1"
            value={currentFormData.degree}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="major"
            placeholder="Major"
            className="input-field1"
            value={currentFormData.major}
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
          <div className="textarea-field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Enter your education details here..."
              value={currentFormData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="save-button">
            {editIndex >= 0 ? "Update" : "Add"} Education
          </button>
        </form>

        {educationEntries.length > 0 && (
          <div className="education-entries">
            <h3>Your Education</h3>
            {educationEntries.map((entry, index) => (
              <div key={index} className="education-entry">
                <div className="entry-header">
                  <h4>{entry.degree} in {entry.major}</h4>
                  <div className="entry-actions">
                    <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
                    <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
                  </div>
                </div>
                <p>{entry.university}</p>
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

export default Education;
