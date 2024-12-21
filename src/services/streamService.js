export const getStreams = async () => {
  try {
    const response = await fetch("http://localhost:3005/streams");
    if (!response.ok) {
      throw new Error("Failed to fetch streams");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching streams:", error);
    throw error;
  }
};

export const createStream = async (stream) => {
  try {
    const response = await fetch("http://localhost:3005/streams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stream),
    });

    if (!response.ok) {
      throw new Error("Failed to create stream");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating stream:", error);
    throw error;
  }
};

export const deleteStream = async (id) => {
  const response = await fetch(`http://localhost:3005/streams/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete stream");
  }
};
