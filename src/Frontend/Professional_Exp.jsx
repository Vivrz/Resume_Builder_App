import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "./ResumeContext";
import "./Professional_Info.css";
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
    startDate: "",
    endDate: "",
    description: "",
  });
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    if (resumeData.experience && resumeData.experience.length > 0) {
      setExperienceEntries(resumeData.experience);
    }
  }, [resumeData.experience]); // Added 'resumeData.experience' to the dependency array

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddExperience = (e) => {
    e.preventDefault();

    const updatedExperience =
      editIndex >= 0
        ? experienceEntries.map((entry, idx) =>
            idx === editIndex ? currentFormData : entry
          )
        : [...experienceEntries, currentFormData];

    setExperienceEntries(updatedExperience);
    updateSection("experience", updatedExperience);

    setCurrentFormData({
      title: "",
      company: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      description: "",
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

    if (index === editIndex) {
      setCurrentFormData({
        title: "",
        company: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        description: "",
      });
      setEditIndex(-1);
    }
  };

  const handleNext = () => {
    navigate("/Education");
  };

  const handlePrev = () => {
    navigate("/Skills");
  };

  return (
    <SplitLayout title="Professional Experience" subtitle="Add your experience details">
      <div className="experience-form">
        <form onSubmit={handleAddExperience}>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input-field1"
            value={currentFormData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
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
              placeholder="Enter your experience details here..."
              value={currentFormData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="save-button">
            {editIndex >= 0 ? "Update" : "Add"} Experience
          </button>
        </form>

        {experienceEntries.length > 0 ? (
          <div className="experience-entries">
            <h3>Your Experience</h3>
            {experienceEntries.map((entry, index) => (
              <div key={index} className="experience-entry">
                <div className="entry-header">
                  <h4>
                    {entry.title} at {entry.company}
                  </h4>
                  <div className="entry-actions">
                    <button
                      onClick={() => handleEdit(index)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p>
                  {entry.city}, {entry.state}
                </p>
                <p>
                  {entry.startDate} - {entry.endDate}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-entry">No experience added yet.</p>
        )}

        <div className="navigation-buttons">
          <button type="button" className="prev-button" onClick={handlePrev}>
            {"<-"} Previous
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