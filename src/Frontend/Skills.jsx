

import React, { useState } from "react";
import "./Skills.css";
import { useNavigate } from "react-router-dom";
import { useResume } from "./ResumeContext";

const Skills = () => {
  const navigate = useNavigate();
  const { updateSection } = useResume();

  const [skills, setSkills] = useState([""]);

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
    navigate("/Preview"); 
  };

  const handlePrev = () => {
    navigate("/Education");
  };

  return (
    <div className="Skills-container">
      <div className="Skills-box">
        <h1>Skills</h1>
        <h2>Add your skills information</h2>

        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
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
              style={{
                borderRadius: "50%",
                backgroundColor: "#3B82F6",
                color: "white",
                border: "none",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
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
          Save & Done
        </button>

        <button type="button" className="next" onClick={handleSave}>
          Next {"->"}
        </button>
        <button type="button" className="Prev" onClick={handlePrev}>
          Prev {"<-"}
        </button>
      </div>
    </div>
  );
};

export default Skills;
