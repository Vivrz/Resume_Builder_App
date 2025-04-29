import React, { useState, useEffect } from "react";
import "./Skills.css";
import { useNavigate } from "react-router-dom";
import { useResume } from "./ResumeContext";
import SplitLayout from "./SplitLayout";

const Skills = () => {
  const navigate = useNavigate();
  const { resumeData, updateSection } = useResume();

  const [skills, setSkills] = useState([""]);

  // Load existing skills if available
  useEffect(() => {
    if (resumeData.skills && resumeData.skills.length > 0) {
      setSkills(resumeData.skills);
    }
  }, [resumeData.skills]);

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleChangeSkill = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleSave = () => {
    const cleanedSkills = skills.filter(skill => skill.trim() !== "");
    updateSection("skills", cleanedSkills);
  };

  const handleNext = () => {
    handleSave();
    navigate("/Preview"); 
  };

  const handlePrev = () => {
    handleSave();
    navigate("/Education");
  };

  return (
    <SplitLayout title="Skills" subtitle="Add your skills information">
      <div className="skills-form">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-input-group"
          >
            <input
              type="text"
              placeholder="Skill Name"
              className="input-field"
              value={skill}
              onChange={(e) => handleChangeSkill(index, e.target.value)}
            />
            <button
              type="button"
              className="remove-skill-button"
              onClick={() => handleRemoveSkill(index)}
            >
              &#x2716;
            </button>
          </div>
        ))}

        <button
          type="button"
          className="add-skills-button"
          onClick={handleAddSkill}
        >
          + Add More Skills
        </button>

        <button type="button" className="save-button" onClick={handleSave}>
          Save
        </button>

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

export default Skills;
