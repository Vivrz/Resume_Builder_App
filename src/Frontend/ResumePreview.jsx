import React, { useRef } from "react";
import { useResume } from "./ResumeContext";
import { useNavigate } from "react-router-dom";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ModernTemplate from "./ModernTemplate";
import "./ResumePreview.css";

const ResumePreview = () => {
  const { resumeData, isDataLoaded } = useResume();
  const resumeRef = useRef();
  const navigate = useNavigate();

  const handlePrev = () =>{
    navigate('/');
  }


  const handleDownloadPDF = async () => {
    const { education, experience , personalInfo , skills} = resumeData;

  if (!education || education.length === 0 || !experience || experience.length === 0 || !personalInfo || personalInfo.length === 0 ||  !skills || skills.length === 0 ) {
    alert("Please complete your all details before downloading the resume.");
    return;
  }
    const input = resumeRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  const handleBack = () => {
    navigate("/Skills"); // Go back to the last form page
  };
  
  return (
    <div className="resume-preview-page">
      <div className="preview-header">
        <h1>Resume Preview</h1>
        <p>Your resume is ready! You can download it as a PDF or go back to make additional changes.</p>
      </div>
      
      <div className="resume-preview-wrapper">
        <div className="resume-container" ref={resumeRef}>
          <ModernTemplate data={resumeData} />
        </div>
        
        <div className="resume-buttons">
          <button onClick={handleDownloadPDF} className="download-button">
            Download as PDF
          </button>
          
          <button onClick={handleBack} className="back-button">
            Go Back
          </button>
        </div>
      </div>
      <button type="button" className="Prev" onClick={handlePrev}>
          Home {"<-"}
        </button>
    </div>
  );
};

export default ResumePreview;
