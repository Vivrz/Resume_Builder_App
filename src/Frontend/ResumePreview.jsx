import React, { useRef } from "react";
import { useResume } from "./ResumeContext";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ModernTemplate from "./ModernTemplate";
import "./ResumePreview.css";
import { useNavigate } from "react-router-dom";

const ResumePreview = () => {
  const { resumeData } = useResume();
  const resumeRef = useRef();
  const navigate = useNavigate();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Resume",
    onAfterPrint: () => console.log("Printing completed."),
    onBeforePrint: () => console.log("Printing started."),
  });

  const handleDownloadPDF = async () => {
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
    </div>
  );
};

export default ResumePreview;
