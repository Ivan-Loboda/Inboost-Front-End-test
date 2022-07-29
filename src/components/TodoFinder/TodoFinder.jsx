import { useState } from "react";
import { getTodoById } from "../../services/api/api";
import TodoItem from "../TodoItem/TodoItem";
import s from './TodoFinder.module.scss'

const TodoFinder = () => {

    const [input, setInput] = useState("");
    const [todo, setTodo] = useState(null)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        const id = input;
        getTodoById(id).then(item => setTodo(item.data.task))
    }

    return (
        <>
            <div className={s.container}> 
                <label>Enter ID:

                    <input
                        value={input}
                        onChange={handleChange} />

                </label>
                <button onClick={handleClick}>SUBMIT</button>
            </div>
            {todo && (
                <TodoItem key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}>
                </ TodoItem>
            )}

            {!todo && (<p>Didn't found anything</p>)}
        </>
    )
}

export default TodoFinder;