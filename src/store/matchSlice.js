import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMatches = createAsyncThunk(
  'matches/fetchMatches',
  async () => {
    const response = await axios.get('https://app.ftoyd.com/fronttemp-service/fronttemp');
    return response.data.data.matches;
  }
);

const matchSlice = createSlice({
  name: 'matches',
  initialState: {
    matches: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.matches = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Ошибка: не удалось загрузить информацию';
      });
  },
});

export default matchSlice.reducer;
