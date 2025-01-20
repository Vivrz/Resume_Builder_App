import React from "react";
import "./AboutUs.css";
const teamMembers = [
  {
    name: "Avdhesh upadhyay",
    role: "Frontend Developer",
    description: "Passionate about crafting intuitive user interfaces and enhancing user experience.",
    image: "vivek.jpg", // Replace with the actual path to Vivek's profile picture
  },
  {
    name: "vivek singh",
    role: "Backend Developer",
    description: "Loves working on server-side logic and optimizing database performance.",
    image: "anjali.jpg", // Replace with the actual path to Anjali's profile picture
  },
  {
    name: "Shreshta Vashistha",
    role: "AI Specialist",
    description: "Specializes in integrating AI models and building intelligent solutions.",
    image: "rahul.jpg", // Replace with the actual path to Rahul's profile picture
  },
  {
    name: "Anurag Pareek",
    role: "UI/UX Designer",
    description: "Focuses on creating visually appealing and user-friendly designs.",
    image: "priya.jpg", // Replace with the actual path to Priya's profile picture
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <h2>About Us</h2>
      <p>
        We are a team of dedicated individuals working on the Resume Builder project. Our goal is to
        simplify and automate the process of creating professional resumes.
      </p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              src={member.image}
              alt={`${member.name}'s profile`}
              className="team-member-img"
            />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
