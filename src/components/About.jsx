import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      About
      <button onClick={() => navigate("/")}>GO TO HOME</button>
    </div>
  );
};

export default About;
