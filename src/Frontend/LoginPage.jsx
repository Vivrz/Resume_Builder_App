import React from "react";
import "./LoginPage.css"; 

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">SHIVAY</h1>
        <h2 className="welcome-text">Welcome to My SHIVAY AI Resume Builder</h2>

        <div className="social-login">
          <button className="social-button facebook">FACEBOOK</button>
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
          Don't have an account? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
