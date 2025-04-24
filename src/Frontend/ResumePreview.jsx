

import React, { useRef } from "react";
import { useResume } from "./ResumeContext";
import { useNavigate } from "react-router-dom";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ModernTemplate from "./ModernTemplate";
import  "./ResumePreview.css";

const ResumePreview = () => {
  const navigate = useNavigate();
  const { resumeData, isDataLoaded } = useResume();
  const resumeRef = useRef();

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

  if (isDataLoaded) {
    return <div className="loading-text">Loading resume data...</div>;
  }
  
  return (
    <div className="resume-preview-wrapper">
      <div className="resume-container" ref={resumeRef}>
        <ModernTemplate data={resumeData} />
      </div>
      <div className="resume-buttons">
        <button onClick={handleDownloadPDF}>Download as PDF</button>
      </div>
      <button type="button" className="Prev" onClick={handlePrev}>
          Home {"<-"}
        </button>
    </div>
  );
  
};

export default ResumePreview;
