// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'LoginSlice',
  initialState: { 
    value: false,
    signupValue: false,
   },
  reducers: {
    changeValue: (state) => {
        state.signupValue = false;
        console.log("CHLA")
        state.value = !state.value;
        console.log(state.value,"state")
    },
    changeSignupValue: (state) => {
        state.value = false;
        state.signupValue = !state.signupValue;
    },
  },
});

export const { changeSignupValue, changeValue} = LoginSlice.actions;
export default LoginSlice.reducer;
