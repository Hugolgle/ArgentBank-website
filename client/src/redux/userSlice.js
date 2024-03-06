import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredential) => {
    const request = await axios.post(`http://127.0.0.1:3001/api/v1/user/login`, userCredential);
    const response = await request.data;
    localStorage.setItem("token", response.body.token)
    return response;
  }
);

export const profileUser = createAsyncThunk(
  'user/profileUser',
  async () => {
    const request = await axios.post(`http://127.0.0.1:3001/api/v1/user/profile`, null, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer${localStorage.getItem("token")}`
      }
    });
    const response = await request.data;
    return response;
  }
);

export const userInfoEdit = createAsyncThunk(
  'user/userInfoEdit',
  async (infoEdit) => {
    const request = await axios.put(`http://127.0.0.1:3001/api/v1/user/profile`, infoEdit, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer${localStorage.getItem("token")}`
      }
    });
    const response = await request.data;
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    userInfo: ""
  },
  reducers: {
    reset: (state) => {
      state.token = null;
      state.userInfo = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.body.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.token = null;
      })
      .addCase(profileUser.fulfilled, (state, action) => {
        state.userInfo = action.payload.body;
      })
      .addCase(profileUser.rejected, (state, action) => {
        state.userInfo = null;
      })
      .addCase(userInfoEdit.fulfilled, (state, action) => {
        state.userInfo = action.payload.body;
      })
      .addCase(userInfoEdit.rejected, (state, action) => {
        state.userInfo = null;
      });
  },
});

export default userSlice.reducer;
export const { reset } = userSlice.actions;