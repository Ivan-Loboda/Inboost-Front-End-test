import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import TodoList from './components/TodoList/TodoList';
import UpdateTodo from './components/TodoForm/TodoForm';
import TodoFinder from './components/TodoFinder/TodoFinder'

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoList />
        <UpdateTodo />
        <TodoFinder />
      </Provider>
    </>
  );
}

export default App;
