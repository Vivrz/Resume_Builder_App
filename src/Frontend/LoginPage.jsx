import React from "react";
import "./LoginPage.css"; 
import { Link } from "react-router-dom";
const LoginPage = () => {
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

        <form>
          <input type="email" placeholder="Your email" className="input-field" />
          <input type="password" placeholder="Your password" className="input-field" />
          <a href="#" className="forgot-password">
            Forgot your password?
          </a>
          <button type="submit" className="sign-in-button">
            SIGN IN
          </button>
        </form>

        <div className="signup-link">
          Don't have an account? <Link to="/SignUp" >
          Sign Up
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;
