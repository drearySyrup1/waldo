import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  selectedCharacter: null,
  level: null,
  foundCharacters: [],
  stopCountdown: null,
  time: 0,
  points: [],
};

const gameplaySlice = createSlice({
  name: "gameplay",
  initialState,
  reducers: {
    changeCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
    resetCharacter: (state) => {
      state.selectedCharacter = null;
    },
    changeLevel: (state, action) => {
      state.level = action.payload;
    },
    addFoundCharacter: (state, action) => {
      state.foundCharacters.push(action.payload);
    },
    setStopCountdown: (state, action) => {
      state.stopCountdown = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    increaseTime: (state) => {
      state.time = state.time + 1;
    },
    resetFoundCharacters: (state) => {
      state.foundCharacters = [];
    },
    addNewPoint: (state, action) => {
      const { x, y, rect, green } = action.payload;

      state.points.push({ x, y, rect, green });
    },
    resetPoints: (state) => {
      state.points = [];
    },
  },
});

export const startTimer = createAsyncThunk(
  "gameplay/startTimer",
  (params, { dispatch }) => {
    const { setTime, increaseTime, setStopCountdown } =
      gameplaySlice.actions;
    dispatch(setTime(0));
    return new Promise((resolve, reject) => {
      console.log("inside promise");
      const interval = setInterval(() => {
        console.log("works");
        dispatch(increaseTime());
      }, 1000);
      dispatch(setStopCountdown(() => clearInterval(interval)));
      resolve();
    });
  }
);

export default gameplaySlice.reducer;
export const {
  changeCharacter,
  resetCharacter,
  changeLevel,
  addFoundCharacter,
  resetFoundCharacters,
  addNewPoint,
  resetPoints,
} = gameplaySlice.actions;
