import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// /users/signup - Greate a new user
// {
//   "name": "string",
//   "email": "string",
//   "password": "string",
// }
export const register = createAsyncThunk(
  'authorization/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
