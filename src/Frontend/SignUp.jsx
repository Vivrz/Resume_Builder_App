
import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { Link } from "react-router-dom";
const SignUpPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const[confirmpassword , setconpassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {

      const response = await axios.post("http://localhost:5000/Signup", userData);

      if (response.data.success) {

        if (password != confirmpassword) {
          setError("password do not match");
          return
        }

        alert(response.data.message);
      } else {

        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred while signing up. Please try again.");
    }
  };

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

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <input
            type="password"
            placeholder="confirm password"
            className="input-field"
            value={confirmpassword}
            onChange={(e) => setconpassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button">
            Submit
          </button>
          <div className="signup-link">Already signup ??
            <Link to="/Login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
