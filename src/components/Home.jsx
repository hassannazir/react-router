import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button
        onClick={() => {
          navigate("/contact");
        }}
      >
        GO TO CONTACT PAGE
      </button>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        GO TO ABOUT PAGE
      </button>
    </div>
  );
};

export default Home;
