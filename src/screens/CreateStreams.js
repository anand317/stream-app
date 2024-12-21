import React, { useState } from "react";
import Button from "../components/Button";
import { createStream, getStreams } from "../services/streamService";
import { useNavigate } from "react-router-dom";

const CreateStreams = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStream = { title, description };

    try {
      await createStream(newStream);

      setTitle("");
      setDescription("");
      alert("Stream added successfully!");

      navigate("/streams");
    } catch (error) {
      console.error("Error creating stream:", error);
      alert("Failed to create stream");
    }
  };
  return (
    <div style={{ padding: "60px" }}>
      <h2>Create a Stream</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="title"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              textAlign: "left",
              width: "100%",
            }}
          >
            Enter Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter stream title"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="description"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Enter Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter stream description"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Button label={"Submit"}></Button>
        </div>
      </form>
    </div>
  );
};

export default CreateStreams;
