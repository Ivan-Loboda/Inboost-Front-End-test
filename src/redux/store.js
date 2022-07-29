import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './todos/todosSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    devTools: process.env.NODE_ENV === 'production',
});


export default store