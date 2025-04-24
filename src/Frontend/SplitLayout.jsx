import React from "react";
import { useResume } from "./ResumeContext";
import ModernTemplate from "./ModernTemplate";

const SplitLayout = ({ children, title, subtitle }) => {
  const { resumeData } = useResume();

  return (
    <div className="split-layout" style={{
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#121829",
      color: "#fff",
      display: "flex",
      minHeight: "100vh",
      width: "100%",
      overflow: "hidden"
    }}>
      {/* Left side - Form */}
      <div className="form-container" style={{
        flex: "1",
        padding: "2rem",
        overflowY: "auto",
        maxWidth: "50%"
      }}>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        {children}
      </div>

      {/* Right side - Preview */}
      <div className="preview-container" style={{
        flex: "1",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h2 style={{ color: "#333", marginBottom: "1rem" }}>Live Preview</h2>
        <div style={{ 
          transform: "scale(0.7)", 
          transformOrigin: "top center",
          width: "100%"
        }}>
          <ModernTemplate data={resumeData} />
        </div>
        <div style={{ 
          margin: "1rem 0", 
          color: "#666", 
          fontSize: "0.9rem", 
          textAlign: "center" 
        }}>
          This is a live preview. Save your changes to update it.
          <br />
          Visit the Preview page for full-size view and download options.
        </div>
      </div>
    </div>
  );
};

export default SplitLayout; 