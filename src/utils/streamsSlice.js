import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState={
    streams: [],
  };

  const streamsSlice = createSlice({
    name: 'streams',
    initialState,
    reducers: {
      setStream: (state, action) => {
        state.streams = action.payload;
      },
      addStream: (state, action) => {
        state.streams.push(action.payload);
      },
      deleteStreams: (state, action) => {
        state.streams = state.streams.filter((stream) => stream.id !== action.payload);
      },
      editStream: (state, action) => {
        const index = state.streams.findIndex((stream) => stream.id === action.payload.id);
        if (index !== -1) {
          state.streams[index] = action.payload;
        }
      },
    },
  });
  
  export const { setStream, addStream, deleteStreams, editStream } = streamsSlice.actions;
  
  export default streamsSlice.reducer;