import React from "react";

const ModernTemplate = ({ data }) => {
  const personalInfo = data.personalInfo || {};
  const experience = data.experience || [];
  const education = data.education || [];
  const skills = data.skills || [];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        backgroundColor: "#fff",
        padding: "40px",
        width: "800px",
        margin: "auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
     
      <div style={{ borderBottom: "2px solid #3B82F6", marginBottom: "20px" }}>
        <h1 style={{ marginBottom: "5px", color: "#1f2937" }}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p style={{ color: "#6b7280" }}>
          {personalInfo.email} | {personalInfo.contact}
        </p>
        {personalInfo.address && (
          <p style={{ color: "#6b7280" }}>{personalInfo.address}</p>
        )}
      </div>

      {experience.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#2563eb" }}>Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx} style={{ marginTop: "10px" }}>
              <strong>{exp.title}</strong> - {exp.company}
              <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>
                {exp.city}, {exp.state} | {exp.startDate} - {exp.endDate}
              </p>
              {exp.address && <p>{exp.address}</p>}
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#2563eb" }}>Education</h2>
          {education.map((edu, idx) => (
            <div key={idx} style={{ marginTop: "10px" }}>
              <strong>{edu.degree}</strong>{edu.major ? ` in ${edu.major}` : ''}
              <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>
                {edu.university} | {edu.startDate} - {edu.endDate}
              </p>
              {edu.description && <p>{edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#2563eb" }}>Skills</h2>
          <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", paddingLeft: 0 }}>
            {skills.map((skill, idx) => (
              <li
                key={idx}
                style={{
                  backgroundColor: "#e0f2fe",
                  color: "#0c4a6e",
                  margin: "5px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "0.9rem",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ModernTemplate;
