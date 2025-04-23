

import React, { useRef } from "react";
import { useResume } from "./ResumeContext";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ModernTemplate from "./ModernTemplate";
import  "./ResumePreview.css";

const ResumePreview = () => {
  const { resumeData, isDataLoaded } = useResume();
  const resumeRef = useRef();

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
    </div>
  );
  
};

export default ResumePreview;
