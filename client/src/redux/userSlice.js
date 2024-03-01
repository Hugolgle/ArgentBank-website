import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredential)=>{
          const request = await axios.post(`http://127.0.0.1:3001/api/v1/user/login`, userCredential);
          const response = await request.data;
          localStorage.setItem("token", JSON.stringify(response.body.token))
          return response;
    }
  );

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    userInfo: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.body.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.token = null;
      });
  },
});

export default userSlice.reducer;
