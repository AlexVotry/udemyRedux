import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    list: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.list.push({
        ...action.payload,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      state.list = state.list.filter(car => car.id !== action.payload )
    },
  }
});

export const {changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;