
import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css"; 
import { Link, Navigate, useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:5000/Login", loginData);

      if (response.data.success) {
        alert(response.data.message); 
        localStorage.setItem("token", response.data.jwtoken); 
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div
      className="login-container"
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121829",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="login-box">
        <h1 className="logo">SHIVAY</h1>
        <h2 className="welcome-text">Welcome to My SHIVAY AI Resume Builder</h2>

        <div className="social-login">
          <button className="social-button linkedin">Linkedin</button>
          <button className="social-button google">GOOGLE</button>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="forgot-password">
            Forgot your password?
          </a>
          <button type="submit" className="sign-in-button">
            SIGN IN
          </button>
        </form>

        {error && <p className="error-message">{error}</p>} {/* Show error message */}

        <div className="signup-link">
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
