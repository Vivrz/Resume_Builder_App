import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import {base_url} from "./Hunter";
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
      const response = await axios.post(`${base_url}/Login`, loginData);

      if (response.data.success) {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Wrong e-mail or password. Please try again.");
    }
  };


  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;


      localStorage.setItem("loggedInUser", user.displayName);


      const token = await user.getIdToken();
      localStorage.setItem("token", token);

      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error(error.message);
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
          <button onClick={handleGoogleSignIn} className="google-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google icon"
              className="google-icon"
            />
            Sign in with Google
          </button>
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

        {error && <p className="error-message">{error}</p>}

        <div className="signup-link">
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
