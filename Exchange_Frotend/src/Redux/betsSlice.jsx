import { createSlice } from "@reduxjs/toolkit";

const betsSlice = createSlice({
  name: "bets",
  initialState: {
    bets: [], // Initial state for bets
  },
  reducers: {
    addBet: (state, action) => {
      state.bets.push(action.payload); // Add a new bet to the state
    },
  },
});

export const { addBet } = betsSlice.actions; // Export the action
export default betsSlice.reducer; // Export the reducer
