import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
  },
});
export const { addNowPlaying, addTrailerVideo, addPopularMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
