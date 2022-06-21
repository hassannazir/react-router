import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      Contact
      <button onClick={() => navigate("/")}>GO TO HOME</button>
    </div>
  );
};

export default Contact;
