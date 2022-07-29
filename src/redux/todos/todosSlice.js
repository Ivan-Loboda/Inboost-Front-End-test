import { createSlice } from '@reduxjs/toolkit';
import { getTodos } from './todosOperations';

const initialState = {
  todos: [],
  error: null,
};

const balanceSlice = createSlice({
    name: 'todos',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(getTodos.pending, state => {
          state.error = null;
        })
        .addCase(getTodos.fulfilled, (state, { payload }) => {
          state.todos = payload;
        })
        .addCase(getTodos.rejected, (state, { payload }) => {
          state.error = payload;
        });
    },
  });

  export default balanceSlice.reducer