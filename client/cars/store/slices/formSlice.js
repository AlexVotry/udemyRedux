import {createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    value: 0,
  },
   reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeValue(state, action) {
      state.value = action.payload;
    },
   },
   extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = '';
      state.value = 0;
    });
   },
});


export const { changeName, changeValue } = formSlice.actions;
export const formReducer = formSlice.reducer;
