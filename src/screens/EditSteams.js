import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStreams } from "../services/streamService";
import Button from "../components/Button";

const EditSteams = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchStream = async () => {
      try {
        const streams = await getStreams();
        const stream = streams.find((stream) => stream.id.toString() === id);
        if (stream) {
          setTitle(stream.title);
          setDescription(stream.description);
        } else {
          alert("Stream not found");
        }
      } catch (error) {
        console.error("Error fetching stream:", error);
      }
    };

    fetchStream();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedStream = { title, description };

    try {
      await fetch(`http://localhost:3005/streams/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStream),
      });

      alert("Stream updated successfully!");
      navigate("/streams");
    } catch (error) {
      console.error("Error updating stream:", error);
      alert("Failed to update stream");
    }
  };

  return (
    <div style={{ padding: "60px" }}>
      <h2>Edit a Stream</h2>
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

export default EditSteams;
