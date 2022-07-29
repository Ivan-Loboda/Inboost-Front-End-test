import TodoItem from "../TodoItem/TodoItem"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTodos} from "../../redux/todos/todosOperations";
import { useEffect, useState } from "react";


const TodoList = () => {

    const [todoList, setTodoList] = useState([])
    

    const dispatch = useDispatch();
    let initialTodos = useSelector(state => state.todos.todos);

    useEffect(() => {
        dispatch(getTodos())
        setTodoList(initialTodos);
      }, []);
    
      useEffect(() => {
        setTodoList(initialTodos);
      }, [initialTodos]);

    

    return (
        <>
            <ul>
                {todoList.map((item) => {
                return (
                    <TodoItem key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}>
                    </ TodoItem>
                )
            })}
            </ul></>
    )
}

export default TodoList