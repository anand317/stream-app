import React, { useEffect } from "react";
import { getStreams, deleteStream } from "../services/streamService";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStream, deleteStreams } from "../utils/streamsSlice";

const Streams = () => {
  const streams = useSelector((state) => state.streams.streams);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateStream = () => {
    navigate("/create-streams");
  };

  const handleEdit = (id) => {
    console.log(`Edit stream with ID: ${id}`);

    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteStream(id);
      dispatch(deleteStreams(id));

      alert("Stream deleted successfully!");
    } catch (error) {
      console.error("Error deleting stream:", error);
      alert("Failed to delete stream");
    }
  };

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const streamData = await getStreams();
        dispatch(setStream(streamData));
      } catch (error) {
        console.log("error fetching stream", error);
      }
    };
    fetchStreams();
  }, [dispatch]);
  return (
    <div style={{ padding: "50px" }}>
      <h2>Streams</h2>
      <div>
        {streams &&
          streams.map((stream) => (
            <div
              key={stream.id}
              style={{
                borderTop: "1px solid grey",

                padding: "2px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <h3>{stream.title}</h3>
                <p>{stream.description}</p>
              </div>
              <div style={{ display: "flex" }}>
                <Button onClick={() => handleEdit(stream.id)} label="Edit">
                  Edit
                </Button>
                <Button onClick={() => handleDelete(stream.id)} label="Delete">
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>
      <Button label={"CreateStreams"} onClick={handleCreateStream} />
    </div>
  );
};

export default Streams;
