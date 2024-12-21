import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleCreateStream = () => {
    navigate("/create-streams");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "30px",
      }}
    >
      <span
        style={{
          fontSize: "24px",
          marginBottom: "20px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Streams
      </span>
      <Button label={"CreateStreams"} onClick={handleCreateStream} />
    </div>
  );
};

export default Home;
