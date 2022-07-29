import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9001';

export const getTodosList = () => axios.get('/tasks');

export const getTodoById = (id) => axios.get(`/task/${id}`);

export const addNewTodo = (newTodo) => axios.post('/task/create', newTodo);

export const updateTodo = (newTodo) => axios.post('/task/update', newTodo);

export const deleteTodo = (id) => axios.delete(`/task/delete/${id}`);