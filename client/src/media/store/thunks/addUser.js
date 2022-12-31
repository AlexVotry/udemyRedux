import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from '@faker-js/faker';
import { pause } from "./devTool";

export const addUser = createAsyncThunk("users/add", async (user) => {
  const { data } = await axios.post(`http://localhost:3005/users`, {
    name: faker.name.fullName()
});
  await pause(1000);
  
  return data;
});