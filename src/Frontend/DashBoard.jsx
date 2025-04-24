
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const googleName = localStorage.getItem("loggedInUser");

    if (token && (name || googleName)) {
      setUserName(name || googleName);
    } else {
      setUserName("");
    }
  }, [location]);


  const handleClick = () => {
    navigate("/AboutUs");
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("loggedInUser");
    alert("User Logout successfully");
    setUserName("");
    navigate("/");
  };

  const handleAI = () => {
    alert("Will Be Released Soon ....");
  }


  const handleCreateResume = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/PersonalInfo");
      console.log("All gud");
    } else {
      navigate("/Login");
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#001f3f",
          padding: "10px 20px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", gap: "15px" }}>

          <button style={navButtonStyle}>Home</button>

          <button style={navButtonStyle} onClick={handleClick}>
            About us
          </button>

          {
            userName && (
              <button style={navButtonStyle} onClick={handleAI}>
                AI Assistant
              </button>
            )
          }
        </div>



        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {userName ? (
            <>
              <span style={navButtonStyle}>{userName}</span>
              <button style={navButtonStyle} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={handleLogin} style={navButtonStyle}>
              Login
            </button>
          )}
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(to bottom, #001f3f, #111111)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginTop: "0px" }}>
          BEST FREE AI RESUME BUILDER
        </h1>
        <div>
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "#003f7f",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
              marginBottom: "30px",
            }}
            onClick={handleCreateResume}
          >
            Create resume
          </button>
        </div>
        <div
          style={{
            backgroundColor: "rgba(0, 31, 63, 0.8)",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "80%",
            maxWidth: "600px",
            marginTop: "40px",
          }}
        >
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
            Create, edit, and format effortlessly.
            🔜 AI features launching soon — watch this space!
          </p>
        </div>
      </div>
    </div>
  );
};

const navButtonStyle = {
  padding: "10px 15px",
  backgroundColor: "#003f7f",
  border: "none",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
};

export default Dashboard;
