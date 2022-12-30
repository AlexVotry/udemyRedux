import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeName, changeValue } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer
  }
});

export {
  store,
  changeName,
  changeSearchTerm,
  changeValue,
  addCar,
  removeCar
}