
import { configureStore } from '@reduxjs/toolkit';
import streamsReducer from './streamsSlice';

const StreamsStore = configureStore({
  reducer: {
    streams: streamsReducer,
  },
});

export default StreamsStore