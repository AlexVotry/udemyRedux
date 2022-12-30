import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from '@faker-js/faker';

export const addUser = createAsyncThunk("users/add", async (user) => {
  const { data } = await axios.post(`htp://localhost:3005/users`, {
    name: faker.name.fullName()
});
  return data;
});