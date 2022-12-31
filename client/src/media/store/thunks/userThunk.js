import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { pause } from "./devTool";

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const {data} = await axios.get('http://localhost:3005/users');

  await pause(1000); // dev only!!
  return data;
});

// dev only to slow down request to see the loading:

// const pause = (duration) => new Promise(resolve => setTimeout(resolve, duration));

// export {fetchUsers};