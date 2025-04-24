
import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { Link , useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const[confirmpassword , setconpassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmpassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }
  
    const userData = {
      name,
      email,
      password,
    };
  
    try {
      const response = await axios.post("http://localhost:5000/Signup", userData);
  
      if (response.data.success) {
        alert(response.data.message);
        navigate('/Login');
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
