import React from "react";

const ModernTemplate = ({ data, resumeRef }) => {
  return (
    <div
      ref={resumeRef}
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
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <p style={{ color: "#6b7280" }}>
          {data.personalInfo.email} | {data.personalInfo.phone}
        </p>
      </div>


      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#2563eb" }}>Experience</h2>
        {data.experience.map((exp, idx) => (
          <div key={idx} style={{ marginTop: "10px" }}>
            <strong>{exp.title}</strong> - {exp.company}
            <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>
              {exp.city}, {exp.state} | {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.address}</p>
          </div>
        ))}
      </section>


      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#2563eb" }}>Education</h2>
        {data.education.map((edu, idx) => (
          <div key={idx} style={{ marginTop: "10px" }}>
            <strong>{edu.degree}</strong>, {edu.major}
            <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>
              {edu.university} | {edu.startDate} - {edu.endDate}
            </p>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>

    
      <section>
        <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#2563eb" }}>Skills</h2>
        <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", paddingLeft: 0 }}>
          {data.skills.map((skill, idx) => (
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
    </div>
  );
};

export default ModernTemplate;
