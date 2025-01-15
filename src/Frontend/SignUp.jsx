import React from "react";
import "./SignUp.css";

const SignUpPage = () => {
  return (
    <div
  className="signup-container"
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
      <div className="sign-box">
        <h1 className="logo">SHIVAY</h1>
        
        <div className="social-login">
          <button className="social-button linkedin">Linkedin</button>
          <button className="social-button google">GOOGLE</button>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <form>
          <input type="text" placeholder="Full name" className="input-field"/>
          <input type="tel" pattern="[0-9]+" title="Please enter a valid positive number" required placeholder="Contact Number" className="input-field" />
          <input type="email" placeholder="Your email" className="input-field" />
          <input type="password" placeholder="Your password" className="input-field" />
          <input type="password" placeholder=" Confirm Your password" className="input-field" />
          
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
          
        
      </div>
    </div>
  );
};

export default SignUpPage;


