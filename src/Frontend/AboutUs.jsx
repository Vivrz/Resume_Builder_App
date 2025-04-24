import React from "react";
import "./AboutUs.css";
const teamMembers = [
  {
    name: "Avdhesh upadhyay",
    image: "https://avatars.githubusercontent.com/u/142656855?v=4",
  },
  {
    name: "Anurag Pareek",
    image: "https://avatars.githubusercontent.com/u/111258454?v=4", 
  },
  {
    name: "Shreshta Vashistha",
    github : "https://github.com/Shreshtha2003",
    image : "https://avatars.githubusercontent.com/u/132035889?v=4"
  },
  {
    name: "Vivek singh",
    image: "https://avatars.githubusercontent.com/u/163974647?v=4",
    github : "https://github.com/Vivrz"
  },
];

const AboutUs = () => {
  const handleclick = (member) => {
    window.location.href = member.github;
  }
  return (
    <div className="about-us-section">
      <h2>About Us</h2>
      <p style = {{color : "white"}}>
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
              onClick={() => handleclick(member)}
            />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
