import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTodosList, addNewTodo } from '../../services/api/api'

export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async (_, thunkAPI) => {
        try {
            const data = await getTodosList();
            return data.data.tasks;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

// export const addTodo = createAsyncThunk(
//     'todos/addTodo',
//     async (newTodo, thunkAPI) => {
//         try {
//             await addNewTodo(newTodo);

//         } catch (error) {
//             return thunkAPI.rejectWithValue('Something wrong :(');
//         }
//     }
// )